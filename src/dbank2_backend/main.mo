import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";



actor DBank{
   stable var currentValue: Float = 300;
  //  currentValue := 300;
   
   stable var startTime = Time.now();
   
  startTime := Time.now();


   let id = 2131243121321;


   public func topUp(amount: Float) {
     
   
         currentValue += amount;
         Debug.print(debug_show(currentValue));

     
   };


   public func topDown(amount: Float) {

     let tempValue : Float = currentValue - amount ;
    if (tempValue >= 0) {
        currentValue -= amount;
        Debug.print(debug_show(currentValue));
    } else {

      
      Debug.print(debug_show(tempValue));
    }
   };

  public query func checkBalance(): async Float {
    return currentValue;
  };


  public func compound() {
    let currentTime = Time.now();
    let timeElaspedNS = currentTime - startTime;
    let timeElaspedS = timeElaspedNS / 1000000000;
    currentValue := currentValue * (1.01 ** Float.fromInt(timeElaspedS));
    startTime := currentTime ;
  }
  
    
}