Module.register("ultraClock", {
    // Default module config.
    defaults: {
      hour: 0,
      minutes: 0,
      seconds: 0,
    },
  
    start: function() {
        var self = this;
        setInterval(function() {
            const currentTime = new Date()
            self.config.hour = currentTime.getHours()
            self.config.minutes = currentTime.getMinutes()
            self.config.seconds = currentTime.getSeconds()
            self.updateDom(); // no speed defined, so it updates instantly.
        }, 100); //perform every 1000 milliseconds.
    },

    // Override dom generator.
    getDom: function () {
      var wrapper = document.createElement("div");
    
      wrapper.classList.add('ultraClock')

      const hour = this.config.hour;
      const minutes = this.config.minutes;
      const seconds = this.config.seconds;
  
      wrapper.innerHTML = `
        <div class="ultraClock">
            <div class="clock">
                <div class="ledNumber div1">${hour > 9 ? String(hour)[0] : 0}</div>
                <div class="ledNumber div2">${hour > 9 ? String(hour)[1] : String(hour)}</div>
                <div class="ledNumber div3">:</div>
                <div class="ledNumber div4">${minutes > 9 ? String(minutes)[0] : 0}</div>
                <div class="ledNumber div5">${minutes > 9 ? String(minutes)[1] : String(minutes)}</div>
                <div class="ledNumber div6">:</div>
                <div class="ledNumber div7">${seconds > 9 ? String(seconds)[0] : 0}</div>
                <div class="ledNumber div8">${seconds > 9 ? String(seconds)[1] : String(seconds)}</div>
            </div>
            <div class="date">
                ${new Date().toLocaleDateString("pt-BR", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )}
            </div>
        </div>
      `;
      
      return wrapper;
    },

    getStyles: function (){
        return [
            'main.css'
        ]
    }
  });