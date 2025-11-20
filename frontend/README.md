# React Users Dashboard

A simple and clean React-based Users Dashboard. This project demonstrates searching, filtering, sorting, and pagination with a fully modular component structure to keep the code clean, reusable, and easy to understand.

### Features
1. Search Functionality
You can search users by First Name, Last Name and Email Address.
The search is case-insensitive and updates the table dynamically as you type.

2. Filter by Email Domain
Users can be filtered using their email domain.
Example: show only users with @reqres.in.

3. Sorting
Sorting options include Sort by Name, Sort by Email and Sort by Email.
Sorting works smoothly along with other filters and search features.

4. Pagination
Users are displayed page-wise.
Previous and Next buttons are added.

Disabled Buttons Feature:
When you reach the first page or last page, the corresponding button becomes disabled, and hover does NOT activate it.

5. Component-Based Architecture
To keep the project clean and readable, the whole UI logic is broken into multiple components, all managed through a central components.js file.

Component Breakdown:

Component ->	Responsibility
SearchBar.jsx ->	Handles search input for name/email
FilterDropdown.jsx ->	Filters users by domain
SortOptions.jsx -> 	Sorting logic for name/email/ID
UserTable.jsx ->	Displays user list in table format
PaginationButtons.jsx ->	Renders Previous & Next buttons
components.js->	Central export file importing all components so the main file stays clean

This approach makes code modular, simplifies debugging and improves readability.


6. Local JSON Backup (API Fallback Feature)
Sometimes the API requires a key, or may fail.
To avoid breaking the UI data is also stored locally in src/data/Data.js.

