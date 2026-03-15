# PDF Search Index FTS

Fast desktop search for large PDF collections using **SQLite FTS** and cached `index.json` data.

This project is designed for users who need to search thousands of PDF pages quickly, open the correct file immediately, and review the result inside an integrated PDF viewer.

---

## Overview

**PDF Search Index FTS** helps you search large PDF libraries much faster than scanning raw files every time.

The application can:

- search page text from `index.json`
- automatically build `index_fts.db` for faster repeated searches
- fall back safely when FTS is not ready yet
- open the matched PDF directly at the selected page
- display results in an integrated viewer with multiple page modes
- support fullscreen and presentation-style viewing
- manage multiple dataset tabs and profiles

This tool is especially useful for:

- pharmacopoeia libraries
- scientific PDF archives
- regulatory document collections
- technical reference libraries
- any folder containing a very large number of PDFs

---

## Key Features

- **SQLite FTS search** for much faster keyword lookup
- **Auto-create `index_fts.db`** when `index.json` exists but the FTS database is missing
- **Cached JSON fallback** for compatibility with older datasets
- **Integrated PDF viewer** with navigation and zoom controls
- **Book View / Continuous View / Fullscreen / Presentation** modes
- **Dataset tabs** for switching between multiple PDF libraries
- **Profile manager** for saving and restoring working states
- **Drag & drop** support for folder, PDF, or index files
- **Search results panel** with file, page, type, snippet, and path
- **File explorer panel** for browsing indexed content

---

## Download

Download the latest packaged build here:

- Release: <https://github.com/nghiencuuthuoc/pdf_search_index_fts/releases/tag/20260315_pdf_search_index_fts>

---

## Video Guide

Watch the step-by-step tutorial here:

- YouTube: <https://youtu.be/QJDbU1DUwsg>

---

## GitHub Repository

Source code and updates:

- Repository: <https://github.com/nghiencuuthuoc/pdf_search_index_fts>

---

## Quick Start

1. Download the latest release.
2. Extract the package to a local folder.
3. Run `pdf_search_index_v3.exe`.
4. Add a dataset folder that contains your PDFs and, if available, `index.json`.
5. Wait for the app to auto-create `index_fts.db` when needed.
6. Enter a keyword and run the search.
7. Click a result row to open the matched PDF page in the viewer.

---

## Recommended Dataset Structure

A typical folder may look like this:

```text
YourDataset/
├─ index.json
├─ index_fts.db               # auto-created when needed
├─ file_001.pdf
├─ file_002.pdf
└─ subfolders/... 
```

The application works best when:

- the folder contains a valid `index.json`
- PDFs remain in their expected relative locations
- `index_fts.db` is allowed to be created in the same dataset folder

---

## Basic Workflow

### 1. Add a dataset
Use **Add path**, **Browse folder**, or drag and drop a folder into the app.

### 2. Build the search database automatically
If `index.json` exists and `index_fts.db` is missing, the app can create the FTS database automatically.

### 3. Search
Enter a shared keyword or a local keyword for the selected tab, then click **Search**.

### 4. Review results
The results table shows:

- file name
- page number
- result type
- text snippet
- path

### 5. Open and read
Click the result to open the PDF in the built-in viewer.

---

## Viewer Controls

The integrated viewer supports multiple reading modes, including:

- **Single Page**
- **Facing**
- **Book View**
- **Show Pages Continuously**
- **Fullscreen**
- **Presentation**

Typical actions include:

- previous / next page
- go to page
- zoom in / zoom out
- rotate left / rotate right
- open the selected PDF externally

Presentation mode is useful for distraction-free reading on a full screen.

---

## Screenshots

> Keep the screenshot files inside the repository `Screenshots/` folder so the images render correctly on GitHub.

### Main Interface
![Main Interface](Screenshots/2026-03-15%2018.23.46.screenshot.png)

### Search and Viewer Example
![Search and Viewer Example](Screenshots/2026-03-15%2018.35.02.screenshot.png)

### Additional Interface View
![Additional Interface View](Screenshots/2026-03-15%2019.05.37.screenshot.png)

---

## Notes

- The first run on a large dataset may take longer because the FTS database may need to be created.
- Later searches are usually much faster once `index_fts.db` is available.
- If your dataset changes significantly, rebuild or refresh the dataset so the search database stays aligned with the source PDFs.
- Keep `index.json`, PDFs, and `index_fts.db` together for the best experience.

---

## Suggested Use Cases

- Chinese Pharmacopoeia collections
- translated pharmacopoeia libraries
- medical and pharmaceutical reference sets
- internal SOP and QA/QC PDF repositories
- document-heavy R&D knowledge bases

---

## Support

For updates, releases, and documentation, check the GitHub repository and release page above.

---

© 2009-2026 • Pharma R&D Platforms • PharmApp • Discover • Design • Develop • Validate • Deliver | www.nghiencuuthuoc.com | Zalo: +84888999311 | www.pharmapp.dev
