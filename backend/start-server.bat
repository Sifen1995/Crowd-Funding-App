@echo off
echo Starting Laravel Backend Server with increased memory limit...
php -d memory_limit=256M -S localhost:8001 -t public
pause
