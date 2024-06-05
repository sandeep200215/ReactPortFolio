// EducationalSection.js
import React from 'react';

const Education = () => {
  return (
    <section className="   py-8 sm:py-16 bg-gray-100 mt-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-2xl font-bold text-center mb-8 ">Education Details</h2>
        <div className="overflow-x-auto">
          <table className="  w-full table-auto mb-12">
            <thead className=''>
              <tr>
                <th className="px-4 py-2 text-xl font-serif">Degree/Board</th>
                <th className="px-4 py-2 text-xl font-serif">Institution</th>
                <th className="px-4 py-2 text-xl font-serif">Session</th>

                <th className="px-4 py-2 text-xl font-serif">Percentage/CGPA</th>
              </tr>
            </thead>
            <tbody className='text-center mx-4 text-xl font-mono' >
              <tr className=" ">
                <td className=" px-4 py-2">MCA</td>
                <td className=" px-4 py-2">Manipal University Jaipur</td>
                <td className=" px-4 py-2">2023-25</td>
                <td className=" px-4 py-2">7.5</td>
              </tr>
              <tr>
                <td className=" px-4 py-2">BCA</td>
                <td className=" px-4 py-2">SPM College Utantpuri</td>
                <td className=" px-4 py-2">2019-22</td>
                <td className= "px-4 py-2">74.5</td>
              </tr>
              <tr >
                <td className=" px-4 py-2">12th</td>
                <td className=" px-4 py-2">Nalanda College</td>
                <td className=" px-4 py-2">2017-19</td>
                <td className=" px-4 py-2">72</td>
              </tr>
              <tr >
                <td className=" px-4 py-2">10th</td>
                <td className=" px-4 py-2">Nalanda Collegiate Biharsharif</td>
                <td className=" px-4 py-2">2016-17</td>
                <td className=" px-4 py-2">74.8</td>
              </tr>
             
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Education;
