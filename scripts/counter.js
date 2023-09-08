const targetDate = new Date('09/07/2023');
function updateDaysSinceGoal() {
  
  // Calculate the current date
  const currentDate = new Date();
  
  // Calculate the difference in days
  const timeDifference = currentDate - targetDate;
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  
  // Store the days difference in local storage
  localStorage.setItem('daysSinceGoal', daysDifference);

  
  // Return the days difference
  return daysDifference;
}

// Call the function to update and retrieve the days since the goal
const daysSinceGoal = updateDaysSinceGoal();




const counter = async()=>{
        const n1 = document.getElementById('count')
        const heading1 = `</br></br><p style="position: absolute;right:33%; top:55%;padding-right:2%; font-size: 35px; color: #ff33ff; line-height: 80%; font-weight:bold;">Day Count</p></br></br><p style="position: absolute;right:38%; top:62%;padding-right:2%; font-size: 40px; color: #ff33ff; line-height: 80%; font-weight:bold;">   ${daysSinceGoal}</p></br></br><p style="position: absolute;right:31%; top:71%;padding-right:2%; font-size: 22px; color: #ff33ff; line-height: 80%; font-weight:bold;">Since ${targetDate.toDateString()}</p>`
        n1.innerHTML = heading1
}
counter();
