@echo off
echo Setting up Neeraali Website Development Environment...
echo.

echo Installing Node.js dependencies...
call npm install

echo.
echo Installing Angular CLI globally...
call npm install -g @angular/cli@latest

echo.
echo Installing Tailwind CSS...
call npm install -D tailwindcss postcss autoprefixer

echo.
echo Setup complete! 
echo.
echo To start development server, run:
echo   ng serve
echo.
echo Then open http://localhost:4200 in your browser
echo.
pause