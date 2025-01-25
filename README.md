# Next.js 15 useEffect Hook Issue with Client-Side Navigation

This repository demonstrates an unexpected behavior with the `useEffect` hook in a Next.js 15 application when using client-side navigation.  The counter in the About page continues to increment even after navigating away from the page.

## Bug Description

A simple counter is implemented using the `useState` and `useEffect` hooks in the About page.  The counter increments every second. However, when navigating to another page and back to the About page, the counter continues from where it left off instead of resetting.  This is unexpected behavior as the component should unmount and remount.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate to the `/about` page.
5. Navigate to the `/` page and back to `/about`.
6. Observe that the counter continues from where it left off, instead of resetting to 0.

## Solution

The solution involves adding a cleanup function within the `useEffect` hook that clears the interval when the component unmounts or when the page is changed.  This ensures that the interval is stopped, preventing the counter from continuing to increment.

## Further Notes
This issue highlights a potential unexpected behavior when using the useEffect hook in conjunction with client-side navigation in Next.js.  Always ensure proper cleanup in your useEffect hooks, especially when dealing with intervals or other asynchronous operations that need to be stopped when the component is unmounted.