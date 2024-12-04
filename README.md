Here’s a `README.md` for your **Smart Habit Tracker** API:

---

# Smart Habit Tracker API

A simple API to help users track their daily habits. This API allows users to add habits, mark them as complete, retrieve all habits, and generate a weekly report of habit completions.

## Features
- Add new habits with a daily goal.
- Mark habits as completed for the day.
- Get all active habits and their completion status.
- Generate a weekly report of habit completions.

## API Endpoints

### 1. **POST /api/habits**
   Add a new habit with a name and daily goal.

   **Request Body**:
   ```json
   {
     "name": "Drink Water",
     "dailyGoal": 8
   }
   ```

   **Response**:
   ```json
   {
     "message": "Habit added successfully",
     "habit": {
       "id": 1623353620512,
       "name": "Drink Water",
       "dailyGoal": 8,
       "log": []
     }
   }
   ```

### 2. **GET /api/habits**
   Get a list of all habits and their completion status.

   **Response**:
   ```json
   [
     {
       "id": 1623353620512,
       "name": "Drink Water",
       "dailyGoal": 8,
       "log": ["2024-12-01", "2024-12-02"]
     },
     {
       "id": 1623353620513,
       "name": "Exercise",
       "dailyGoal": 30,
       "log": ["2024-12-01"]
     }
   ]
   ```

### 3. **PUT /api/habits/:id**
   Mark a habit as completed for the day by updating its log with the current date.

   **Request URL**:
   ```
   PUT /api/habits/1623353620512
   ```

   **Response**:
   ```json
   {
     "message": "Habit updated successfully for today",
     "habit": {
       "id": 1623353620512,
       "name": "Drink Water",
       "dailyGoal": 8,
       "log": ["2024-12-01", "2024-12-02", "2024-12-03"]
     }
   }
   ```

### 4. **GET /api/habits/report**
   Get a weekly report showing the last 7 days of habit completion.

   **Response**:
   ```json
   {
     "weekData": [
       {
         "name": "Drink Water",
         "completion": ["2024-12-01", "2024-12-02", "2024-12-03"]
       },
       {
         "name": "Exercise",
         "completion": ["2024-12-01"]
       }
     ]
   }
   ```

---

## Installation

### 1. Clone the repository:
```bash
git clone https://github.com/yourusername/smart-habit-tracker.git
cd smart-habit-tracker
```

### 2. Install dependencies:
```bash
npm install
```

### 3. Set up environment variables:
- Create a `.env` file in the root directory.
- Add the following:
  ```
  PORT=8000
  ```

### 4. Start the server:
```bash
npm start
```

The server will start on `http://localhost:8000`. You can access the API at `/api/habits` and WebSocket notifications at `ws://localhost:8080`.

---

## Dependencies

- `express`: Web framework for Node.js.
- `body-parser`: Middleware to parse request bodies.
- `node-cron`: Task scheduler to send daily reminders.
- `ws`: WebSocket library for sending real-time notifications.

---

## Usage

### Example Flow:

1. **Add a Habit**: 
   Use a `POST` request to add a habit, e.g., "Drink Water" with a goal of 8 glasses per day.

2. **Mark Habit as Completed**:
   Use a `PUT` request to mark the habit as completed for today. This adds today's date to the habit’s log.

3. **View All Habits**:
   Use a `GET` request to view all habits, including their names, goals, and completion status.

4. **Get Weekly Report**:
   Use a `GET` request to get a report of the last 7 days for each habit, showing when each habit was completed.

---

## WebSocket Notifications

- The server uses WebSocket to send reminders for incomplete habits at a scheduled time every day.
- WebSocket is set to run on `ws://localhost:8080`. You can connect to it from the frontend to receive real-time notifications.

---

## License

This project is open-source and available under the MIT License.

---

Let me know if you'd like to modify or add anything specific!
