function TimeBasedGreeting() {
    const currentHour = new Date().getHours();
    
    return (
      <div className="Time">
        {currentHour < 12 ? <h1>Good morning!</h1> 
        : currentHour < 18? <h1>Good afternoon!</h1> 
            : <h1>Good evening!</h1>
        }
      </div>
    );
  }
  
  export default TimeBasedGreeting;