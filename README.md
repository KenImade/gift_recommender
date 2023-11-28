# Gift Recommender

## Overview
Gift Recommender is a machine learning-powered application designed to provide personalized gift recommendations based on Amazon product data. This project leverages a sophisticated recommendation engine to analyze user preferences and suggest relevant gifts. The backend is developed using Flask and serves the ML model, while the frontend is built with React, offering a seamless and interactive user experience.

## Live Project
You can check out the live project [here](https://www.example.com).

## Features
- **Personalized Recommendations:** Utilizes user data to provide tailored gift suggestions.
- **Machine Learning Backend:** Employs advanced algorithms for accurate recommendations.
- **User-Friendly Interface:** Easy-to-navigate frontend designed in React.
- **Scalable Architecture:** Flask backend ensures efficient handling of requests.

## File Structure
Gift-Recommender/
│
├── backend/                  # All backend-related files
│   ├── app.py                # Flask application entry point
│   ├── models/               # Machine learning models and scripts
│   │   ├── recommendation_model.py
│   │   └── training/         # Notebooks and scripts for model training
│   │       └── model_training.ipynb
│   ├── routes/               # API routes
│   │   └── api.py
│   ├── services/             # Business logic/services
│   ├── static/               # Static files for Flask
│   ├── templates/            # HTML templates for Flask views
│   └── requirements.txt      # Python dependencies
│
├── data/                     # Data directory
│   ├── raw/                  # Raw data files
│   ├── processed/            # Cleaned and processed data
│   └── notebooks/            # Jupyter notebooks for data processing
│       ├── data_cleaning.ipynb
│       └── data_exploration.ipynb
│
├── frontend/                 # All frontend-related files
│   ├── public/               # Public files like index.html
│   ├── src/                  # React source files
│   │   ├── components/       # React components
│   │   ├── App.js            # Main React application file
│   │   ├── App.css           # Main application styles
│   │   └── index.js          # React application entry point
│   └── package.json          # Node.js dependencies and scripts
│
├── README.md                 # Main project README
├── .gitignore                # Specifies intentionally untracked files to ignore
└── LICENSE                   # Project License

## Installation
To set up the project locally, follow these steps:

1. **Clone the Repository**
   ```
   bash
   git clone https://github.com/yourusername/gift-recommender.git
   cd gift-recommender
   ```

2. **Set Up the Backend**
    - `cd backend`
    - `pip install -r requirements.txt`

3. **Set Up the Frontend**
    - `cd ../frontend`
    - `npm install`

## Usage
To run the application:

1. **Start the Flask Backend**
- From the backend directory:
`python app.py`


2. **Launch the Frontend**
- Open a new terminal and navigate to the frontend directory
`npm start`

3. **Access the application**
- Open your browser and visit `http://localhost:3000`.