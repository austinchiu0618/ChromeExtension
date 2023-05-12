## host_permissions
主要使用時機為需在 Ｅxtension中 Cross-origin 請求對應API資料時，需在 host_permissions 裡定義 相關網域的網址 
## permissions
當 Extension 需要對瀏覽器 進行附加功能時，有可能會需要使用到 Browser 的功能(像是Cookie、Storage)協助，此時就需透過在 Permission 中進行使用宣告，才能進行 權限的使用。
## optional_permissions
optional_permissions 的主要功能類似於 permissions，兩者差別在於 使用時機 ， optional_permissions 通常會在 Extension 啟動行時進行權限聲明，而不是提前聲明。