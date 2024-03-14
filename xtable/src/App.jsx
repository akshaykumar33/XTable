/* eslint-disable no-unused-vars */
import { useState } from 'react'

import './App.css'

function App() {

  const[data,setData]=useState(
    [
    
        { date: "2022-09-01", views: 100, article: "Article 1" },
    
        { date: "2023-09-01", views: 100, article: "Article 1" },
    
        { date: "2023-09-02", views: 150, article: "Article 2" },
    
        { date: "2023-09-02", views: 120, article: "Article 3" },
    
        { date: "2020-09-03", views: 200, article: "Article 4" }
    
    ]
    
    );

    const handleSortByDate = () => {
      const sortedData = [...data].sort((a, b) => new Date(b.date) - new Date(a.date));
      setData(sortedData);
    }
    
    const handleSortByViews = () => {
      const sortedData = [...data].sort((a, b) => b.views - a.views);
      setData(sortedData);
    }
    
  return (
    <>       
      <div className="card">
       <h1>Date and Views Table</h1>
       <button onClick={handleSortByDate}>Sort by Date</button>
       <button onClick={handleSortByViews}>Sort by Views</button>
       <table>
        <thead>
          <th>Date</th>
          <th>Views</th>
          <th>Article</th>
        </thead>
        <tbody>
          {data.map((d,id)=>(
             <tr key={id}>
            <td>{d.date}</td>
            <td>{d.views}</td>
            <td>{d.article}</td>
          </tr>))}
        </tbody>
       </table>
      </div>   
    </>
  )
}

export default App;
