
import { Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Register from "./pages/login";

function App() {
  const Depa = 'Science'
  let list = [
    {
      sciences: [
        "Helo",
        `Computer ${Depa}`,
        `Mathematics`,
        `Chemistry ${Depa}`,
        `Physics ${Depa}`,
        `Zoology ${Depa}`,
        `Botany ${Depa}`,
        `Micro Biology ${Depa}`,
        `Biochemistry ${Depa}`,
        `Industrial  Chemistry ${Depa}`,
        `Statistics$ {Depa}`,
        `Geophysics ${Depa}`
      ]
    }, {
      agric: [
        `Mathematical ${Depa}`,
        `Chemistry ${Depa}`,
        `Physics ${Depa}`,
        `Zoology ${Depa}`,
        `Botany ${Depa}`,
        `Micro Biology ${Depa}`,
        `Biochemistry ${Depa}`,
        `Industrial  Chemistry ${Depa}`,
        `Statistics$ {Depa}`,
        `Geophysics ${Depa}`]
    },
    {
      department: [
        `Computer  ${Depa}`,
        `Engineering ${Depa}`,
        `Agric ${Depa}`,
        `Mathematical ${Depa}`,
        `Chemical ${Depa}`,
        `Physical ${Depa}`,
        `Biological ${Depa}`,
      ]
    }
  ]
  return (
    <Box>
      <Router>
        <Box className="App">
          <Navbar />
          <Box className="content">
            <Routes>
              <Route exact path="/" element={<Home />}>

              </Route>
              <Route path="/Register" element={<Register arr={list} />}>

              </Route>
            </Routes>
          </Box>
        </Box>
      </Router>
    </Box>
  );
}

export default App;
