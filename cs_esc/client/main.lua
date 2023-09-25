local IsMenuRealyOpen

Citizen.CreateThread(function()
	while true do
		Citizen.Wait(0)
		SetPauseMenuActive(false)
		if IsControlJustPressed(1, 199) or IsControlJustPressed(1, 200) and not IsPauseMenuActive() then
			IsMenuRealyOpen = true
		   	SetNuiFocus(true, true);
		   	SendNUIMessage({
        		type = "enableui",
        		enable = true
    		})        
	    end
	end
end)

Citizen.CreateThread(function()
	local sleep = 120
	while true do
		if IsPauseMenuActive() then
			sleep = 0
			DisableControlAction(0, 71, true) 
			DisableControlAction(0, 72, true) 
		else
			sleep = 120
			EnableControlAction(0, 71, false) 
			EnableControlAction(0, 72, false) 	
		end
	Citizen.Wait(sleep)
	end
end)

function IsMenuOpen()
	return IsMenuRealyOpen
end

RegisterNUICallback('back', function(data, cb)
	IsMenuRealyOpen = false
	SetNuiFocus(false, false);
	DisplayRadar(true)
end)
RegisterNUICallback('map', function(data, cb)
	IsMenuRealyOpen = false
	SetNuiFocus(false, false);
	SetFrontendActive(true)
	ActivateFrontendMenu(GetHashKey("FE_MENU_VERSION_MP_PAUSE"), 0, -1)
	DisplayRadar(true)
end)
RegisterNUICallback('buttons', function(data, cb)
	IsMenuRealyOpen = false
	SetNuiFocus(false, false);
	ActivateFrontendMenu(GetHashKey("FE_MENU_VERSION_LANDING_KEYMAPPING_MENU"), 0, -1)
	DisplayRadar(true)
end)
RegisterNUICallback('settings', function(data, cb)
	IsMenuRealyOpen = false
	SetNuiFocus(false, false);
	ActivateFrontendMenu(GetHashKey("FE_MENU_VERSION_LANDING_MENU"), 0, -1)
	DisplayRadar(true)
end)
RegisterNUICallback('disconnect ', function(data, cb)
	IsMenuRealyOpen = false
	SetNuiFocus(false, false);
	RestartGame();
	DisplayRadar(true)
end)
