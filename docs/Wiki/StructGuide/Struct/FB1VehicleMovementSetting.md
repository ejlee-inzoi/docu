## 🧩 Struct: FB1VehicleMovementSetting

Defines vehicle movement behavior including steering, acceleration, and braking.

### Properties

- **MaxWheelAngle** (`float`): Maximum total steering angle. 60 means ±30 degrees per side.  
- **MaxForwardVelocity** (`float`): Maximum speed when driving forward. *(ClampMin = 0)*  
- **MaxReverseVelocity** (`float`): Maximum speed when driving in reverse. *(ClampMin = 0)*  
- **MaxWheelRotateTime** (`float`): Time taken to fully rotate the wheels left or right. *(ClampMin = 0)* *(Category = Steering)*  
- **MaxWheelReturnRotateTime** (`float`): Time it takes for the steering wheel to return after being turned to its maximum angle. *(ClampMin = 0)* *(Category = Steering)*  
- **SteeringRestoreSpeed** (`float`): Time to return to straight steering when not controlled. *(ClampMin = 0)* *(Category = Steering)*  
- **SteeringDecelerationRate** (`float`): Speed reduction rate during turns. *(ClampMin = 0, ClampMax = 1)* *(Category = Steering)*  
- **SteeringDecelerationTime** (`float`): Time to apply full deceleration during turns. *(ClampMin = 0)* *(Category = Steering)*  
- **MaxAccelerationTime** (`float`): Time to reach max forward speed. *(ClampMin = 0)* *(Category = Acceleration)*  
- **AccelerationRestoreSpeed** (`float`): Time to come to stop if no input while moving forward. *(ClampMin = 0)* *(Category = Acceleration)*  
- **MaxReverseAccelerationTime** (`float`): Time to reach max reverse speed. *(ClampMin = 0)* *(Category = Brake)*  
- **ReverseAccelerationRestoreSpeed** (`float`): Time to stop when reversing and no input. *(ClampMin = 0)* *(Category = Brake)*  
- **HandBrakeDeaccelerationRate** (`float`): Rate at which vehicle slows when handbrake is used. *(ClampMin = 0, ClampMax = 1)* *(Category = HandBrake)*  
- **HandBrakeDeaccelerationTime** (`float`): Time to stop completely with handbrake. *(ClampMin = 0)* *(Category = HandBrake)*  
