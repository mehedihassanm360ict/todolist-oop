CREATE SCHEMA if NOT EXISTS dbo;

CREATE TABLE dbo.todo_lists (
    list_id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    created_at TIMESTAMP with time zone DEFAULT current_timestamp,
    updated_at TIMESTAMP with time zone DEFAULT current_timestamp
);

CREATE TABLE dbo.tasks (
    task_id SERIAL PRIMARY KEY,
    list_id INT NOT NULL,
    description TEXT,
    is_complete BOOLEAN DEFAULT FALSE,
    due_date Date,
    priority VARCHAR(10) check(priority in ('low', 'medium', 'high')) DEFAULT 'low',
    created_at TIMESTAMP with time zone DEFAULT current_timestamp,
    updated_at TIMESTAMP with time zone DEFAULT current_timestamp,
    Foreign Key (list_id) REFERENCES todo_lists(list_id) on delete CASCADE
)