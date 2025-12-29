# Expense Tracker

This is a React-based application that helps users manage their finances by tracking income and expenses using the Context API for state management. It features a modern, card-based UI with comprehensive Light and Dark mode support.

<p align="center">
<img  width="45%" height="850" alt="image" src="https://github.com/user-attachments/assets/a592dfa8-abbd-4739-9b31-545ac6350142" />
<img  width="45%" height="848" alt="Screenshot 2025-12-29 175614" src="https://github.com/user-attachments/assets/69e1dd33-becb-437b-ae38-cc807c6f3960" />
</p>

## Features
- **🌓 Light & Dark Mode:** Toggle between themes with automatic preference saving (Local Storage).
- **💸 Transaction Management:** Add, edit, and delete expense and income entries.
- **📊 Real-time Calculation:** Dynamically updates total balance, income, and expense totals.
- **🏷️ Categorization:** Organize transactions for better financial tracking.
- **📱 Responsive Design:** Fully optimized for desktop and mobile devices.

## Technologies Used
- **React.js** (Hooks & Context API)
- **CSS Variables** (for dynamic theming)
- **Local Storage** (to persist theme preferences)
- **Vite** (Build tool)

## Installation & Usage

1. **Clone the repository:**
   ```sh
   git clone [https://github.com/yourusername/expense-tracker.git](https://github.com/yourusername/expense-tracker.git)
   ```

2. **Navigate to the project directory:**
```sh
cd expense-tracker

```


3. **Install dependencies:**
```sh
npm install

```


4. **Start the application:**
```sh
npm run dev

```


## How It Works

1. **Global State:** All transactions are managed globally using the React Context API, eliminating the need for prop drilling.
2. **Theming:** The application uses data attributes (`data-theme`) and CSS variables to switch color palettes instantly.
3. **Persistence:** When a user toggles the theme or adds a transaction, the data is saved locally so it remains available after refreshing the page.

## Contributing

Contributions are welcome! Feel free to fork this repository and submit a pull request with improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](https://www.google.com/search?q=LICENSE) file for details.
