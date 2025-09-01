import React, { useEffect, useRef, useState } from "react";

type SortDir = "asc" | "desc";
type TypeName = "string" | "number" | "date";

interface Props {
  children: React.ReactNode;
  defaultSort?: { column: number; direction?: SortDir };
  types?: TypeName[];
  className?: string;
  placeholder?: string;
  tableId?: string;
  exportFilename?: string;
}

export default function FilterableSortableTable({
  children,
  defaultSort,
  types,
  className,
  placeholder = "Filter rows...",
  tableId,
  exportFilename = "table_export.csv",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");

  const updateRowStriping = (tbody: HTMLTableSectionElement) => {
    const rows = Array.from(tbody.rows) as HTMLTableRowElement[];
    let visibleIndex = 0;
    rows.forEach((row) => {
      const isVisible = row.style.display !== "none";
      row.classList.remove("even", "odd");
      if (isVisible) {
        row.classList.add(visibleIndex % 2 === 0 ? "even" : "odd");
        visibleIndex++;
      }
    });
  };

  // Sorting
  useEffect(() => {
    const host = ref.current;
    if (!host) return;
    const table = host.querySelector("table");
    if (!table) return;
    const thead = table.querySelector("thead");
    const tbody = table.querySelector("tbody");
    if (!thead || !tbody) return;

    table.classList.add("filterable-sortable-table");
    if (tableId) table.id = tableId;

    const getCellText = (row: HTMLTableRowElement, idx: number) =>
      (row.cells[idx]?.textContent ?? "").trim();

    const inferType = (values: string[]): TypeName => {
      const allNumbers = values.every(
        (v) => v !== "" && !Number.isNaN(parseFloat(v.replace(/[, %]/g, "")))
      );
      if (allNumbers) return "number";
      const allDates = values.every((v) => !Number.isNaN(Date.parse(v)));
      if (allDates) return "date";
      return "string";
    };

    const getComparator = (idx: number, dir: SortDir) => {
      const rows = Array.from(tbody.rows) as HTMLTableRowElement[];
      const colValues = rows.map((r) => getCellText(r, idx));
      const type: TypeName = types?.[idx] ?? inferType(colValues);
      const factor = dir === "asc" ? 1 : -1;

      if (type === "number") {
        return (a, b) =>
          (parseFloat(getCellText(a, idx).replace(/[, %]/g, "")) -
            parseFloat(getCellText(b, idx).replace(/[, %]/g, ""))) *
          factor;
      }
      if (type === "date") {
        return (a, b) =>
          (Date.parse(getCellText(a, idx)) - Date.parse(getCellText(b, idx))) * factor;
      }
      return (a, b) =>
        getCellText(a, idx).localeCompare(getCellText(b, idx), undefined, { numeric: true }) *
        factor;
    };

    const headers = Array.from(thead.querySelectorAll("th")) as HTMLTableCellElement[];
    const cleanup: Array<() => void> = [];

    headers.forEach((th, idx) => {
      th.tabIndex = 0;
      th.setAttribute("role", "button");
      th.setAttribute("aria-label", `Sort by ${th.textContent?.trim() ?? ""}`);

      const onActivate = () => {
        const current = th.getAttribute("data-sort") as SortDir | null;
        const next: SortDir = current === "asc" ? "desc" : "asc";

        headers.forEach((h) => {
          h.removeAttribute("data-sort");
          h.removeAttribute("aria-sort");
        });

        th.setAttribute("data-sort", next);
        th.setAttribute("aria-sort", next === "asc" ? "ascending" : "descending");

        const rows = Array.from(tbody.rows);
        const sorted = rows.slice().sort(getComparator(idx, next));
        sorted.forEach((r) => tbody.appendChild(r));

        updateRowStriping(tbody);
      };

      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onActivate();
        }
      };

      th.addEventListener("click", onActivate);
      th.addEventListener("keydown", onKeyDown);
      cleanup.push(() => {
        th.removeEventListener("click", onActivate);
        th.removeEventListener("keydown", onKeyDown);
      });
    });

    if (defaultSort && Number.isInteger(defaultSort.column) && headers[defaultSort.column]) {
      const th = headers[defaultSort.column];
      th.setAttribute("data-sort", defaultSort.direction ?? "asc");
      th.click();
    } else {
      updateRowStriping(tbody); // initial stripes
    }

    return () => {
      cleanup.forEach((fn) => fn());
      table.classList.remove("filterable-sortable-table");
    };
  }, [types, defaultSort, tableId]);

  // Filtering
  useEffect(() => {
    const host = ref.current;
    if (!host) return;
    const tbody = host.querySelector("tbody");
    if (!tbody) return;

    const rows = Array.from(tbody.rows) as HTMLTableRowElement[];
    rows.forEach((row) => {
      const text = row.innerText.toLowerCase();
      row.style.display = !query || text.includes(query.toLowerCase()) ? "" : "none";
    });

    updateRowStriping(tbody);
  }, [query]);

  // Export visible rows to CSV
  const handleExport = () => {
    const host = ref.current;
    if (!host) return;
    const table = tableId
      ? (document.getElementById(tableId) as HTMLTableElement)
      : host.querySelector("table");
    if (!table) return;

    const rows = Array.from(table.rows).filter(
      (row) => row.style.display !== "none"
    );

    const csv = rows
      .map((row) =>
        Array.from(row.cells)
          .map((cell) => `"${cell.innerText.replace(/"/g, '""')}"`)
          .join(",")
      )
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", exportFilename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className={className}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "0.5rem" }}>
        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="filter-search"
          style={{ flexGrow: 1 }}
        />
        <button onClick={handleExport}>Export CSV</button>
      </div>
      <div ref={ref}>{children}</div>
    </div>
  );
}
