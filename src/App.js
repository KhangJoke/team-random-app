import { Layout } from "antd";
import React, { useCallback, useState } from "react";
import TeamDisplay from "./components/TeamDisplay";
import NameInput from "./components/NameInput";

const {Header, Footer, Content} = Layout
 

function App() {

  const [team1, setTeam1] = useState(["Player1", "Player 2", "Player 3", "Player 4", "Player 5"]);
  const [team2, setTeam2] = useState(["Player1", "Player 2", "Player 3", "Player 4", "Player 5"]);

  const [inputValue, setInputValue] = useState("");
  const [nameList, setNameList] = useState([]);

  const setTeam = useCallback((team1, team2) => {
    setTeam1(team1);
    setTeam2(team2);
  }, []);


    return (
      <Layout className="min-h-screen flex flex-col">
        <Header className="bg-gray-200 text-center py-4">Team Randomize</Header>

        <Content className="flex-1 p-4">
          {/* Team Display and Input Field Section */}
          <div className="flex gap-4 h-full">
            {/* Team Display 1 */}
            <div className="flex-1 bg-gray-100 text-center p-4">
              <h1> Team 1</h1>
              <TeamDisplay team = {team1} />
            </div>
            {/* Team Display 2 */}
            <div className="flex-1 bg-gray-100 text-center p-4">
              <h1>Team 2</h1>
              <TeamDisplay team = {team2}/>
            </div>
            {/* Input Field */}
            <div className="flex-1 bg-gray-100 text-center p-4">
              <h1>Name List</h1>
              <NameInput inputValue = {inputValue} nameList = {nameList} setInputValue = {(e) => setInputValue(e)} setNameList = {(e) => setNameList(e)} setTeam = {(t1, t2) => setTeam(t1, t2)} />
            </div>
          </div>
        </Content>

        <Footer className="bg-gray-200 text-center py-4">
          Footer
        </Footer>
      </Layout>
    );
}
 
export default App;