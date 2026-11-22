// ================= 2. 按下按鈕 A：開始自動飛行路線 =================
input.onButtonPressed(Button.A, function () {
    Drones.Basic_action(Drones.Basicoptions.Takeoff)
    basic.pause(2000)
    Drones.Move_action(Drones.Directionoptions.Forward, 100)
    basic.pause(2000)
    Drones.Move_action(Drones.Directionoptions.Backward, 100)
    basic.pause(2000)
    Drones.Move_action(Drones.Directionoptions.Left, 100)
    basic.pause(2000)
    Drones.Move_action(Drones.Directionoptions.Right, 100)
    basic.pause(2000)
    Drones.Basic_action(Drones.Basicoptions.Landing)
})
// ================= 3. 按下按鈕 B：隨時緊急急停 =================
input.onButtonPressed(Button.B, function () {
    // 【替換成你的Drones積木】：緊急急停 (Emergency Stop)
    basic.showIcon(IconNames.No)
    任務執行中 = 0
})
let 任務執行中 = 0
// 【替換成你的Drones積木】：設定動力功率為 50% (室內測試建議50%)
basic.showIcon(IconNames.Heart)
