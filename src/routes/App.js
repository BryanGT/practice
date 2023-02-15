import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Landing from '../pages/landing';
import NotFound from '../pages/notFound';
import BaristaTransition from '../pages/barista-transition';
import Form from '../pages/form';
import SurveyQ2 from '../pages/surveyQ2'; 
import '../styles/main.scss';
import Results from '../pages/results';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Landing/>} />
                    <Route path="/barista-transition" element={<BaristaTransition/>} />
                    <Route path="/survey-q2" element={<SurveyQ2/>}/>
                    <Route path="/results" element={<Results/>}/>
                    <Route path="/csv" element={<Form/>}/>
                    <Route path="*" element={<NotFound/>}/>    
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;