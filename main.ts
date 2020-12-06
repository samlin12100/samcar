function 左轉 () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    150,
    robotbit.Motors.M2A,
    0
    )
}
function 右轉 () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    0,
    robotbit.Motors.M2A,
    -150
    )
}
function 後退 () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    -150,
    robotbit.Motors.M2A,
    150
    )
}
function 前進 () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    150,
    robotbit.Motors.M2A,
    -150
    )
}
function 右旋轉 () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    -150,
    robotbit.Motors.M2A,
    -150
    )
}
function 左旋轉 () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    150,
    robotbit.Motors.M2A,
    150
    )
}
basic.forever(function () {
    前進()
    後退()
    左轉()
    右轉()
    左旋轉()
})
