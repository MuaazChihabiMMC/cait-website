# PowerShell script to convert SEO subpages from white/blue to dark/gold theme

$seoPath = "c:\Users\MMC\Downloads\test cait\travel_ui_ux-main\cait\app\seo-agentur-berlin"

# Get all client page files
$files = Get-ChildItem -Path $seoPath -Recurse -Filter "*Client*.tsx"

foreach ($file in $files) {
    # Skip the already converted KeywordClientPage
    if ($file.Name -eq "KeywordClientPage.tsx") { continue }
    
    Write-Host "Converting: $($file.Name)"
    
    $content = Get-Content $file.FullName -Raw
    
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
    
    Set-Content $file.FullName $content
    Write-Host "Done: $($file.Name)"
}

Write-Host "All files converted!"
