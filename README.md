# Bakar

Overview ->
Bakar is a frontend project built with React, Tailwind CSS, and Vite. It provides a user interface for managing card information and viewing transaction details. The project includes components for displaying card details, filtering and sorting transactions, and pagination.

How to Run
Prerequisites
  - Node.js (version 14 or higher)
  - npm (version 6 or higher)

Installation ->
  1- Clone the repository:
    git clone https://github.com/your-username/bakar.git
    cd bakar/frontend
  
  2- Install dependencies:
    npm install

  3- Running the Development Server
    npm run dev

Components ->
  Card Info Components: Components for displaying card details, including Card, CardholderDropdown, Info, and Actions.
  Transactions Components: Components for displaying and managing transactions, including FilterSection, Pagination, SortIcon, and TransactionsTable.
  UI Components: Reusable UI components such as button, chevron, loading, and table.
  Navbar: The main navigation bar component.

Hooks ->
  useCardInfo: Custom hook for fetching and managing card information.
  useTransactions: Custom hook for managing transactions, including filtering, sorting, and pagination.

Utilities ->
  utils.js: Utility functions for formatting dates, mapping status codes, and creating Axios instances.

Pages ->
  CardInfoPage: Page component for displaying card information.
  TxnsInfoPage: Page component for displaying transaction information.

License:
  This project is licensed under the MIT License. See the LICENSE file for details.

