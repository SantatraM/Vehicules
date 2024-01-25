import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MonComposant = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Exemple d'appel à un web service avec Axios
    axios.get('https://api.monwebservice.com/donnees')
      .then(response => {
        setData(response.data); // Supposons que response.data est un tableau
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
      });
  }, []);

  return (
    <div>
      {/* Utilisez les données récupérées dans votre interface utilisateur */}
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.nom}</li>
        ))}
      </ul>
    </div>
  );
};

export default MonComposant;
