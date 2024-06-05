import mypicture from './assets/mypicture.jpg'


function Contact()
{
return (
    <footer className="bg-gray-800 align-bottom  sm:py-8">
        <h2 className='text-white text-3xl text-center font-bold'>Reach Out Me</h2>
        <h3></h3>
      <div className="container   mx-auto flex justify-evenly px-4 font-semibold">
        {/* Left part of the footer */}
        <div className="text-white  ">
       
         <ul>
            <li>
            <a href="https://www.linkedin.com/in/sandeepkr1506/" target='_blank' className='text-white-500 hover:underline'>LinkedIn</a>
            </li>
            <li>
            <a href="https://www.hackerrank.com/profile/coder1235"  target='_blank' className='text-white-500 hover:underline'>HackerRank</a>
            </li>
            <li>
            <a href="https://leetcode.com/u/sandeep1506/" target='_blank' className='text-white-500 hover:underline'>LeetCode</a>
            </li>
        
         </ul>
      
        </div>
        
        {/* Right part of the footer */}
        <div className="text-white">
           
         <ul>
           
            <li>
            <a href="https://www.instagram.com/sandeep_sharma8670/" target='_blank' className='text-white-500 hover:underline'>Instagram</a>
            </li>
            <li>
            <a href="https://telegram.me/sandeep_34ty" target='_blank' className='text-white-500 hover:underline'>Telegram</a>
            </li>
            <li>
            <a href="https://www.facebook.com/profile.php?id=100054210267040" target='_blank' className='text-white-500 hover:underline'>Facebook</a>
            </li>
         </ul>
      
        </div>
      </div>
    </footer>
)
}
export default Contact;
