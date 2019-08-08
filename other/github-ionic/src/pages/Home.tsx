import React, { useState, useEffect } from "react";
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonInput
} from "@ionic/react";

import "../theme.css";

import api from "../services/api";

import { star, gitBranch } from "ionicons/icons";

interface Repository {
  id: number;
  full_name: string;
  stargazers_count: number;
  forks_count: number;
  url: string;
}

const Home: React.FunctionComponent = () => {
  const [repos, setRepos] = useState([]);
  const [user, setUser] = useState("");

  useEffect(() => {
    async function loadRepositories() {
      try {
        const response = await api.get(`/users/${user}/repos`);

        console.log(response);

        setRepos(response.data);
      } catch (err) {
        console.log(err);
        setRepos([]);
      }
    }

    loadRepositories();
  }, [user]);

  function handleClick(full_name: string) {
    window.open(`http://www.github.com/${full_name}`, "_blank");
  }

  return (
    <>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Git Repositories</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonInput
          value={user}
          onIonChange={({ detail: { value } }) => setUser(value || "")}
          debounce={300}
          placeholder="Usuário do Github"
        />

        <IonList>
          {repos.map((repo: Repository) => (
            <IonItem onClick={() => handleClick(repo.full_name)} key={repo.id}>
              <IonLabel>{repo.full_name}</IonLabel>
              <IonIcon style={{ marginRight: "10px" }} icon={star} />
              {repo.stargazers_count}
              <IonIcon
                style={{ marginLeft: "10px", marginRight: "10px" }}
                icon={gitBranch}
              />
              {repo.forks_count}
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </>
  );
};

export default Home;
