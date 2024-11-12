# MovieNP

## Description

MovieNP is a movie discovery website where users can explore a range of movies, view details about each title, and filter through dynamic categories. Powered by React and Redux, with a clean, responsive design using Tailwind CSS, MovieNP offers a smooth and immersive browsing experience for movie enthusiasts.

## Screenshots

![Homepage]![alt text](/src/assets/image.png)
![DetailPage]![alt text](/src/assets/image-2.png)
![SearchPage]![alt text](/src/assets/image-3.png)

## Table of Content

- [Features](#features)
- [Live Demo](#livedemo)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies)
- [Folder Structure](#folderstructure)
- [Contributing](#contributing)
- [Contact](#contact)

## Features

- **Browse Popular Movies**: Display a wide range of movies, organized by categories.
- **Dynamic Search & Filters**: Search movies by title, genre, and more.
- **Responsive UI**: Fully responsive design optimized for both desktop and mobile devices.
- **Pagination**: Navigate through pages seamlessly.
- **Movie Detail Page**: View detailed information for each movie, including cast, overview, and rating.

## Live Demo

You can check out the live version of MovieNP here: [MovieNP Live Demo](https://movie-np.vercel.app/)

## Installation

To run MovieNP locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/anish-acharya123/MovieNP.git
   ```

2. Navigate to the project directory:

   ```bash
   cd MovieNp
   ```

3. Install the neccessary dependencies:

   ```bash
   npm install
   ```

4. Set up a .env file with the following variables:
   ```bash
   VITE_APIKEY=your_api_key_here
   VITE_BASEURL=https://api.example.com
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

The app should now be running on `http://localhost:5173

## Usage

- **Homepage**: Browse popular movies by category or genre.
- **Search**: Use the search bar to look for specific titles.
- **View Details**: Click on a movie to see more details.
- **Pagination**: Scroll down to navigate through pages of movie listings.

## Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS, Vite.
- **State Management**: Redux, Redux Toolkit.
- **Routing**: React Router.
- **API**: TMDB API.
- **Deployment**: Vercel.

## Folder Structure

Here’s a brief overview of the folder structure:

```bash
   src/
   ├── apps/                 # Store and Redux configuration
   ├── assets/               # Images, icons, and other assets
   ├── components/           # Reusable components (Navbar, Footer, etc.)
   ├── features/             # Redux slices for managing app state
   ├── pages/                # Main pages (Home, Detail, etc.)
   ├── ui/                   # UI-specific components (Buttons, Headings, etc.)
   ├── utils/                # Utility functions (scrollToTop, API helpers, etc.)
   └── App.tsx               # Main app component
```

## Contributing

Contributions are welcome! If you'd like to help improve this project, please follow these steps:

1. Fork the repositoriy.
2. Create a new branch (`git checkout -b features/new-feature`)
3. Make your changes and commit them (`git commit -m "Add new feature"`)
4. Push the changes to your branch (`git push origin feature/new-feature`)
5. submit a pull request.

## Contact

- **Author**: Anish Acharya.
- **Email**: acharyaanish920gmail.com
- **LinkedIn**: [My LinkedIn](https://www.linkedin.com/in/anish-acharya-819755212/)
