$files = Get-ChildItem -Path "c:\Users\MMC\Downloads\test cait\travel_ui_ux-main\cait\components" -Filter "*.tsx"
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $content = $content -replace 'text-blue-400', 'text-[#fcd066]'
    $content = $content -replace 'text-blue-300', 'text-[#fcd066]'
    $content = $content -replace 'text-blue-200', 'text-gray-200'
    $content = $content -replace 'text-blue-100', 'text-gray-100'
    $content = $content -replace 'bg-blue-600', 'bg-[#fcd066] text-[#0c1832]'
    $content = $content -replace 'bg-blue-500', 'bg-[#fcd066] text-[#0c1832]'
    $content = $content -replace 'border-blue-400', 'border-[#fcd066]'
    $content = $content -replace 'hover:bg-blue-500', 'hover:bg-[#d4a84a]'
    $content = $content -replace 'hover:bg-blue-400', 'hover:bg-[#d4a84a]'
    $content = $content -replace 'hover:text-blue-300', 'hover:text-[#fcd066]'
    $content = $content -replace 'hover:bg-blue-700', 'hover:bg-[#d4a84a]'
    $content = $content -replace 'from-blue-900', 'from-[#1a2a4a]'
    $content = $content -replace 'to-blue-500', 'to-[#d4a84a]'
    Set-Content $file.FullName $content -NoNewline
    Write-Host "Updated: $($file.Name)"
}
Write-Host "Done!"
