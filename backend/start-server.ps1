Write-Host "Starting Laravel Backend Server with increased memory limit..." -ForegroundColor Green
php -d memory_limit=256M -S localhost:8001 -t public
Read-Host "Press Enter to continue..."
