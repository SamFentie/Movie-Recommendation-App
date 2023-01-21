import "./saved_movies.css"
import React from 'react';
import ReactDOM from 'react-dom/client';
import Download from './download_page';
function Top_bar(props){
    return(
        <>
        <div class="user_home_topBar">
            <img src={require(".//image_asset/logo.png")} width="50" height="30"></img>
            <SearchBar></SearchBar>
        </div>
        <div class="favorite">Favorite <img src={require(".//image_asset/favorite.png")} width="20" height="22"/></div>
        </>
    );

}
function SearchBar(){
    return (
        <input class="user_home_searchBar" type="text" placeholder="Search for a movie"></input>
    );
}
const movie_detail=e=>{
    e.preventDefault();
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
       <Download
       body="Tony Stark. Genius, billionaire, playboy, philanthropist. Son of legendary inventor and weapons contractor Howard Stark. When Tony Stark is assigned to give a weapons presentation to an Iraqi unit led by Lt. Col. James Rhodes, he's given a ride on enemy lines. That ride ends badly when Stark's Humvee that he's riding in is attacked by enemy combatants. He survives - barely - with a chest full of shrapnel and a car battery attached to his heart. In order to survive he comes up with a way to miniaturize the battery and figures out that the battery can power something else. Thus Iron Man is born. He uses the primitive device to escape from the cave in Iraq. Once back home, he then begins work on perfecting the Iron Man suit. But the man who was put in charge of Stark Industries has plans of his own to take over Tony's technology for other matters." 
       poster= {e.target.id }
       title={e.target.id} 
       date={"2008"}
        director={""}
        writer={""}
        actor={""}
        language={""}
        award={""}
        production={""}
       ></Download>
      </React.StrictMode>
    );
  }

function Body(){
    return (
        <div id="user_home_grid">
            <Movie title="Avengers" ></Movie>   
            <Movie title="Freedom" ></Movie>  
        </div>
    );
}
function Movie(props){
        return(
            <div>
                    <img onClick={movie_detail} class="user_home_movie_poster"src={require(".//image_asset/"+props.title+".jpg")} width="200" height="250"/><br/>
                    <div class="user_home_movieBottom">
                        <label class="user_home_title">{props.title}</label><br/>
                        <img  class="user_home_calender_image"src={require(".//image_asset/calender.png")} width="20" height="20"/>
                        <label class="user_home_date">2008</label>
                        <img id={props.title} class="user_home_like_image" src={require(".//image_asset/favorite.png")} width="20" height="20"/>
                    </div>
                </div>
        );
    }
export {Top_bar,Body}