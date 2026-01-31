# PowerShell script to convert remaining pages to dark theme

$appPath = "c:\Users\MMC\Downloads\test cait\travel_ui_ux-main\cait\app"

# Files to convert
$files = @(
    "$appPath\services\ServicesPageClient.tsx",
    "$appPath\ueber-uns\AboutPageClient.tsx",
    "$appPath\datenschutz\DatenschutzPageClient.tsx"
)

foreach ($filePath in $files) {
    if (Test-Path $filePath) {
        Write-Host "Converting: $filePath"
        
        $content = Get-Content $filePath -Raw
        
        # Main container changes
        $content = $content -replace 'bg-white text-blue-900', 'bg-primary text-white'
        $content = $content -replace 'bg-white', 'bg-primary'
        
        # Hero/Section backgrounds
        $content = $content -replace 'bg-gradient-to-b from-blue-50 to-white', 'bg-mesh-dark'
        $content = $content -replace 'bg-gradient-to-b from-blue-100 to-white', 'bg-mesh-dark'
        $content = $content -replace 'from-blue-50', 'from-primary-light'
        $content = $content -replace 'to-white', 'to-primary'
        
        # Blue accent colors to gold
        $content = $content -replace 'text-blue-600', 'text-gold-300'
        $content = $content -replace 'text-blue-800', 'text-gray-300'
        $content = $content -replace 'text-blue-900', 'text-white'
        $content = $content -replace 'bg-blue-600', 'bg-gold-300'
        $content = $content -replace 'bg-blue-100', 'bg-primary-light'
        $content = $content -replace 'bg-blue-50', 'bg-primary-light'
        $content = $content -replace 'border-blue-200', 'border-gold-300/20'
        $content = $content -replace 'border-blue-100', 'border-gold-300/20'
        $content = $content -replace 'border-blue-500', 'border-gold-300'
        
        # Button text colors
        $content = $content -replace 'text-white px-8', 'text-primary px-8'
        $content = $content -replace 'bg-white text-blue-600', 'bg-gold-300 text-primary'
        
        # Hover states
        $content = $content -replace 'hover:shadow-xl', 'hover:shadow-gold-300/20'
        
        Set-Content $filePath $content
        Write-Host "Done: $filePath"
    }
}

Write-Host "All remaining files converted!"
