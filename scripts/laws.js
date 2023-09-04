const laws = ["1. Never Outshine the Master","2. Never Put Too Much Trust in Friends, Learn How to Use Enemies","3. Conceal Your Intentions","4. Always Say Less Than Necessary","5. So Much Depends on Reputation – Guard It With Your Life","6. Court Attention at All Costs","7. Get Others to Do the Work for You, but Always Take the Credit","8. Make Other People Come to You – Use Bait if Necessary","9. Win Through Your Actions, Never Through Argument","10. Infection: Avoid the Unhappy and the Unlucky","11. Learn to Keep People Dependent on You","12. Use Selective Honesty and Generosity to Disarm Your Victim","13. When Asking for Help, Appeal to the Self-interests of Others, Never to Their Mercy or Gratitude","14. Pose as a Friend, Work as a Spy","15. Crush Your Enemy Totally","16. Use Absence to Increase Respect and Honor","17. Keep Others in Suspended Terror: Cultivate an Air of Unpredictability","18. Do Not Build Fortresses to Protect Yourself – Isolation is Dangerous","19. Know Who You’re Dealing With – Don’t Offend the Wrong Person","20. Don’t Commit to Anyone","21. Play a Sucker to Catch a Sucker – Appear Dumber Than Your Mark","22. Use the Surrender Tactic: Transform Weakness Into Power","23. Concentrate Your Forces","24. Play the Perfect Courtier","25. Recreate Yourself","26. Keep Your Hands Clean","27. Create a Cult-like Following by Playing on People’s Need to Believe","28. Enter Action With Boldness","29. Plan All the Way to the End","30. Make Your Accomplishments Seem Effortless","31. Control the Options: Get Others to Play With the Cards You Deal","32. Play Into People’s Fantasies","33. Discover Each Man’s Thumbscrew","34. Be Royal in Your Own Fashion: Act Like a King to Be Treated Like One","35. Master the Art of Timing","36. Disdain Things You Cannot Have: Ignoring Them is the Best Revenge","37. Create Compelling Spectacles","38. Think as You Like, but Behave Like Others","39. Stir Up Waters to Catch Fish","40. Despise the Free Lunch","41. Avoid Stepping Into a Great Man’s Shoes","42. Strike the Shepherd, and the Sheep Will Scatter","43. Work on the Hearts and Minds of Others","44. Disarm and Infuriate With the Mirror Effect","45. Preach the Need for Change, but Never Reform Too Much at Once","46. Never Appear Too Perfect","47. Don’t Go Past the Mark You Aimed For: In Victory, Learn When to Stop","48. Assume Formlessness"
];

const motivation = async()=>{
var i = 1;
    function myLoop() {
      setTimeout(function() {
        console.log(laws[i]);
        const n1 = document.getElementById('inspo')
        const heading1 = `</br></br><p style="position: absolute; top:15%;padding-right:2%; font-size: 25px; color: #FF7A59; line-height: 80%; font-weight:bold;">${laws[i]}</p>`
        n1.innerHTML = heading1
        i++;
        if (i < 31) {
          if(i == 30){
            i = 1;
          }
          myLoop();
        }
      }, 7000)
    }
myLoop();
}
motivation();
