local function toggleNuiFrame(shouldShow, coins)
    SetNuiFocus(shouldShow, shouldShow)
    SendReactMessage('setVisible', shouldShow)
    if coins then
        SendReactMessage('setCoins', coins)
    end
end

local function setPage(pageName)
    toggleNuiFrame(true)
    SendReactMessage('setPage', pageName)
end

RegisterNetEvent("YBN.UI:Open")
AddEventHandler("YBN.UI:Open", function(coins)
    toggleNuiFrame(true, coins)
end)

RegisterNetEvent("YBN.UI:Close")
AddEventHandler("YBN.UI:Close", function()
    toggleNuiFrame(false)
end)

RegisterNetEvent("YBN.UI:setPage")
AddEventHandler("YBN.UI:setPage", function(pageName)
    setPage(pageName)
end)

RegisterNUICallback('hideFrame', function(_, cb)
    toggleNuiFrame(false)
    cb({})
end)

RegisterNUICallback('createNotification', function(data, cb)
    TriggerEvent("YBN:Notify", data.content)
end)