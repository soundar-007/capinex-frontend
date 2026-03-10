Add-Type -AssemblyName System.Drawing
$result = @{}
try {
    $bitmap = [System.Drawing.Bitmap]::FromFile("c:\Users\Soundar J\Downloads\capinex-money-mark-main\capinex-money-mark-main\src\assets\new_logo_crm.png")
    for ($x=0; $x -lt $bitmap.Width; $x+=10) {
        for ($y=0; $y -lt $bitmap.Height; $y+=10) {
            $pixel = $bitmap.GetPixel($x, $y)
            if ($pixel.A -gt 50) { # Ignore transparent 
                $key = "{0:X2}{1:X2}{2:X2}" -f $pixel.R, $pixel.G, $pixel.B
                if ($result.ContainsKey($key)) { $result[$key]++ } else { $result[$key] = 1 }
            }
        }
    }
    $sorted = $result.GetEnumerator() | Sort-Object Value -Descending | Select-Object -First 5
    foreach ($item in $sorted) {
        Write-Host "Hex: #$($item.Name) Count: $($item.Value)"
    }
} catch {
    Write-Host "Error: $_"
}
