import React, { useState, useEffect } from 'react';
import './PrivacyPolicyPage.css';

export const PrivacyPolicyPage = ({onClose}) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrollReachedEnd, setScrollReachedEnd] = useState(false);
  
    // Track scroll position
    const handleScroll = () => {
        const currentPosition = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        setScrollPosition(currentPosition);
    setScrollReachedEnd(currentPosition >= maxScroll);
    };
  
    // Add scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    // Handle back button click
    const handleBackButtonClick = () => {
        onClose();
    };

    return (
        <div className="privacy-policy-page">
            <button className="back-button" onClick={handleBackButtonClick} disabled={!scrollReachedEnd}>
                Back
            </button>

            <div className="privacy-policy-content" onScroll={handleScroll}>
                <p className="paragraphs">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor elit sed vulputate mi sit amet mauris commodo. Vel facilisis volutpat est velit egestas dui. Quis enim lobortis scelerisque fermentum dui faucibus. Sit amet justo donec enim. Ut enim blandit volutpat maecenas volutpat blandit. Viverra aliquet eget sit amet tellus. Sed turpis tincidunt id aliquet risus feugiat in. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Mi in nulla posuere sollicitudin aliquam ultrices sagittis. Sem et tortor consequat id porta. Massa eget egestas purus viverra. Nam aliquam sem et tortor consequat. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Maecenas ultricies mi eget mauris pharetra et ultrices neque. Vehicula ipsum a arcu cursus vitae congue mauris. Imperdiet proin fermentum leo vel orci porta non pulvinar. Nullam eget felis eget nunc lobortis mattis. Auctor augue mauris augue neque gravida in fermentum et.
                    Mauris sit amet massa vitae tortor condimentum. Elementum eu facilisis sed odio. Euismod lacinia at quis risus. Imperdiet proin fermentum leo vel orci porta. Vitae congue mauris rhoncus aenean vel elit scelerisque. Nibh ipsum consequat nisl vel pretium lectus quam. Elit ullamcorper dignissim cras tincidunt. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Risus pretium quam vulputate dignissim suspendisse in est. At urna condimentum mattis pellentesque id nibh. Facilisis volutpat est velit egestas. Eleifend mi in nulla posuere sollicitudin aliquam. Egestas diam in arcu cursus euismod quis viverra nibh cras. Laoreet sit amet cursus sit amet dictum sit amet justo. Nulla porttitor massa id neque aliquam vestibulum morbi blandit. Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Velit laoreet id donec ultrices. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Sagittis orci a scelerisque purus semper eget duis at tellus. Amet porttitor eget dolor morbi.
                    Quam lacus suspendisse faucibus interdum. Quam nulla porttitor massa id.
                    
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor elit sed vulputate mi sit amet mauris commodo. Vel facilisis volutpat est velit egestas dui. Quis enim lobortis scelerisque fermentum dui faucibus. Sit amet justo donec enim. Ut enim blandit volutpat maecenas volutpat blandit. Viverra aliquet eget sit amet tellus. Sed turpis tincidunt id aliquet risus feugiat in. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Mi in nulla posuere sollicitudin aliquam ultrices sagittis. Sem et tortor consequat id porta. Massa eget egestas purus viverra. Nam aliquam sem et tortor consequat. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Maecenas ultricies mi eget mauris pharetra et ultrices neque. Vehicula ipsum a arcu cursus vitae congue mauris. Imperdiet proin fermentum leo vel orci porta non pulvinar. Nullam eget felis eget nunc lobortis mattis. Auctor augue mauris augue neque gravida in fermentum et.
                    Mauris sit amet massa vitae tortor condimentum. Elementum eu facilisis sed odio. Euismod lacinia at quis risus. Imperdiet proin fermentum leo vel orci porta. Vitae congue mauris rhoncus aenean vel elit scelerisque. Nibh ipsum consequat nisl vel pretium lectus quam. Elit ullamcorper dignissim cras tincidunt. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Risus pretium quam vulputate dignissim suspendisse in est. At urna condimentum mattis pellentesque id nibh. Facilisis volutpat est velit egestas. Eleifend mi in nulla posuere sollicitudin aliquam. Egestas diam in arcu cursus euismod quis viverra nibh cras. Laoreet sit amet cursus sit amet dictum sit amet justo. Nulla porttitor massa id neque aliquam vestibulum morbi blandit. Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Velit laoreet id donec ultrices. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Sagittis orci a scelerisque purus semper eget duis at tellus. Amet porttitor eget dolor morbi.
                    Quam lacus suspendisse faucibus interdum. Quam nulla porttitor massa id.
                    
                    
                    Pretium quam vulputate dignissim suspendisse in est. Ut lectus arcu bibendum at. Ut porttitor leo a diam. Vel elit scelerisque mauris pellentesque. A cras semper auctor neque vitae tempus quam pellentesque. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Eu facilisis sed odio morbi quis commodo odio. Nisl pretium fusce id velit ut tortor pretium.
                    Sit amet consectetur adipiscing elit. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Convallis convallis tellus id interdum velit laoreet. Dictum fusce ut placerat orci nulla. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Urna porttitor rhoncus dolor purus non. Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. Rhoncus mattis rhoncus urna neque. Commodo viverra maecenas accumsan lacus vel. Ultrices vitae auctor eu augue ut lectus. At auctor urna nunc id cursus. Integer quis auctor elit sed vulputate.
                    Consequat interdum varius sit amet mattis vulputate enim. In fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Odio facilisis mauris sit amet massa vitae tortor. Consectetur lorem donec massa sapien faucibus et molestie ac. Aliquet porttitor lacus luctus accumsan tortor posuere. Velit laoreet id donec ultrices tincidunt arcu non. Id aliquet lectus proin nibh. Integer feugiat scelerisque varius morbi enim. Neque gravida in fermentum et sollicitudin ac. Nibh praesent tristique magna sit amet purus gravida quis. Id velit ut tortor pretium viverra suspendisse potenti nullam. Viverra justo nec ultrices dui. Sit amet volutpat consequat mauris nunc.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor elit sed vulputate mi sit amet mauris commodo. Vel facilisis volutpat est velit egestas dui. Quis enim lobortis scelerisque fermentum dui faucibus. Sit amet justo donec enim. Ut enim blandit volutpat maecenas volutpat blandit. Viverra aliquet eget sit amet tellus. Sed turpis tincidunt id aliquet risus feugiat in. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Mi in nulla posuere sollicitudin aliquam ultrices sagittis. Sem et tortor consequat id porta. Massa eget egestas purus viverra. Nam aliquam sem et tortor consequat. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Maecenas ultricies mi eget mauris pharetra et ultrices neque. Vehicula ipsum a arcu cursus vitae congue mauris. Imperdiet proin fermentum leo vel orci porta non pulvinar. Nullam eget felis eget nunc lobortis mattis. Auctor augue mauris augue neque gravida in fermentum et.
                    Mauris sit amet massa vitae tortor condimentum. Elementum eu facilisis sed odio. Euismod lacinia at quis risus. Imperdiet proin fermentum leo vel orci porta. Vitae congue mauris rhoncus aenean vel elit scelerisque. Nibh ipsum consequat nisl vel pretium lectus quam. Elit ullamcorper dignissim cras tincidunt. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Risus pretium quam vulputate dignissim suspendisse in est. At urna condimentum mattis pellentesque id nibh. Facilisis volutpat est velit egestas. Eleifend mi in nulla posuere sollicitudin aliquam. Egestas diam in arcu cursus euismod quis viverra nibh cras. Laoreet sit amet cursus sit amet dictum sit amet justo. Nulla porttitor massa id neque aliquam vestibulum morbi blandit. Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Velit laoreet id donec ultrices. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Sagittis orci a scelerisque purus semper eget duis at tellus. Amet porttitor eget dolor morbi.
                    Quam lacus suspendisse faucibus interdum. Quam nulla porttitor massa id.
                    
                    
                    Pretium quam vulputate dignissim suspendisse in est. Ut lectus arcu bibendum at. Ut porttitor leo a diam. Vel elit scelerisque mauris pellentesque. A cras semper auctor neque vitae tempus quam pellentesque. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Eu facilisis sed odio morbi quis commodo odio. Nisl pretium fusce id velit ut tortor pretium.
                    Sit amet consectetur adipiscing elit. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Convallis convallis tellus id interdum velit laoreet. Dictum fusce ut placerat orci nulla. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Urna porttitor rhoncus dolor purus non. Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. Rhoncus mattis rhoncus urna neque. Commodo viverra maecenas accumsan lacus vel. Ultrices vitae auctor eu augue ut lectus. At auctor urna nunc id cursus. Integer quis auctor elit sed vulputate.
                    Consequat interdum varius sit amet mattis vulputate enim. In fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Odio facilisis mauris sit amet massa vitae tortor. Consectetur lorem donec massa sapien faucibus et molestie ac. Aliquet porttitor lacus luctus accumsan tortor posuere. Velit laoreet id donec ultrices tincidunt arcu non. Id aliquet lectus proin nibh. Integer feugiat scelerisque varius morbi enim. Neque gravida in fermentum et sollicitudin ac. Nibh praesent tristique magna sit amet purus gravida quis. Id velit ut tortor pretium viverra suspendisse potenti nullam. Viverra justo nec ultrices dui. Sit amet volutpat consequat mauris nunc.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor elit sed vulputate mi sit amet mauris commodo. Vel facilisis volutpat est velit egestas dui. Quis enim lobortis scelerisque fermentum dui faucibus. Sit amet justo donec enim. Ut enim blandit volutpat maecenas volutpat blandit. Viverra aliquet eget sit amet tellus. Sed turpis tincidunt id aliquet risus feugiat in. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Mi in nulla posuere sollicitudin aliquam ultrices sagittis. Sem et tortor consequat id porta. Massa eget egestas purus viverra. Nam aliquam sem et tortor consequat. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Maecenas ultricies mi eget mauris pharetra et ultrices neque. Vehicula ipsum a arcu cursus vitae congue mauris. Imperdiet proin fermentum leo vel orci porta non pulvinar. Nullam eget felis eget nunc lobortis mattis. Auctor augue mauris augue neque gravida in fermentum et.
                    Mauris sit amet massa vitae tortor condimentum. Elementum eu facilisis sed odio. Euismod lacinia at quis risus. Imperdiet proin fermentum leo vel orci porta. Vitae congue mauris rhoncus aenean vel elit scelerisque. Nibh ipsum consequat nisl vel pretium lectus quam. Elit ullamcorper dignissim cras tincidunt. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Risus pretium quam vulputate dignissim suspendisse in est. At urna condimentum mattis pellentesque id nibh. Facilisis volutpat est velit egestas. Eleifend mi in nulla posuere sollicitudin aliquam. Egestas diam in arcu cursus euismod quis viverra nibh cras. Laoreet sit amet cursus sit amet dictum sit amet justo. Nulla porttitor massa id neque aliquam vestibulum morbi blandit. Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Velit laoreet id donec ultrices. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Sagittis orci a scelerisque purus semper eget duis at tellus. Amet porttitor eget dolor morbi.
                    Quam lacus suspendisse faucibus interdum. Quam nulla porttitor massa id.
                    
                    
                    Pretium quam vulputate dignissim suspendisse in est. Ut lectus arcu bibendum at. Ut porttitor leo a diam. Vel elit scelerisque mauris pellentesque. A cras semper auctor neque vitae tempus quam pellentesque. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Eu facilisis sed odio morbi quis commodo odio. Nisl pretium fusce id velit ut tortor pretium.
                    Sit amet consectetur adipiscing elit. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Convallis convallis tellus id interdum velit laoreet. Dictum fusce ut placerat orci nulla. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Urna porttitor rhoncus dolor purus non. Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. Rhoncus mattis rhoncus urna neque. Commodo viverra maecenas accumsan lacus vel. Ultrices vitae auctor eu augue ut lectus. At auctor urna nunc id cursus. Integer quis auctor elit sed vulputate.
                    Consequat interdum varius sit amet mattis vulputate enim. In fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Odio facilisis mauris sit amet massa vitae tortor. Consectetur lorem donec massa sapien faucibus et molestie ac. Aliquet porttitor lacus luctus accumsan tortor posuere. Velit laoreet id donec ultrices tincidunt arcu non. Id aliquet lectus proin nibh. Integer feugiat scelerisque varius morbi enim. Neque gravida in fermentum et sollicitudin ac. Nibh praesent tristique magna sit amet purus gravida quis. Id velit ut tortor pretium viverra suspendisse potenti nullam. Viverra justo nec ultrices dui. Sit amet volutpat consequat mauris nunc.
                
                    
                    Pretium quam vulputate dignissim suspendisse in est. Ut lectus arcu bibendum at. Ut porttitor leo a diam. Vel elit scelerisque mauris pellentesque. A cras semper auctor neque vitae tempus quam pellentesque. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Eu facilisis sed odio morbi quis commodo odio. Nisl pretium fusce id velit ut tortor pretium.
                    Sit amet consectetur adipiscing elit. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Convallis convallis tellus id interdum velit laoreet. Dictum fusce ut placerat orci nulla. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Urna porttitor rhoncus dolor purus non. Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. Rhoncus mattis rhoncus urna neque. Commodo viverra maecenas accumsan lacus vel. Ultrices vitae auctor eu augue ut lectus. At auctor urna nunc id cursus. Integer quis auctor elit sed vulputate.
                    Consequat interdum varius sit amet mattis vulputate enim. In fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Odio facilisis mauris sit amet massa vitae tortor. Consectetur lorem donec massa sapien faucibus et molestie ac. Aliquet porttitor lacus luctus accumsan tortor posuere. Velit laoreet id donec ultrices tincidunt arcu non. Id aliquet lectus proin nibh. Integer feugiat scelerisque varius morbi enim. Neque gravida in fermentum et sollicitudin ac. Nibh praesent tristique magna sit amet purus gravida quis. Id velit ut tortor pretium viverra suspendisse potenti nullam. Viverra justo nec ultrices dui. Sit amet volutpat consequat mauris nunc.
                </p>
            </div>
        </div>
    );
};
