import React, { useEffect, useState } from 'react';

// API Infos unter: https://ghibliapi.herokuapp.com/#
// Pfadbeispiele: /species?name=cat&gender=male | /films?title='My Neighbour Totoro' |

export const RestApi = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [data, setData] = useState<Movie[]>([]);

  const url: string = 'https://ghibliapi.herokuapp.com';
  const path: string = '/films';
  // /58611129-2dbc-4a81-a72f-77ddfc1b1b49

  const getData = async () => {
    const response = await fetch(url + path);
    const data = await response.json();
    console.log(data);

    setData(data);
  };

  useEffect(() => {
    getData()
      .then(() => setIsLoaded(true))
      .catch(error => console.log(error));
  }, []);

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <ul>
      {data?.map(({ title, id, description }) => (
        <li key={id}>
          <p>{title}</p>
          <p>{description}</p>
        </li>
      ))}
    </ul>
  );
};

type Movie = {
  title: string;
  id: string;
  description: string;
};

// Beispiel output:
// {
//   "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
//   "title": "My Neighbor Totoro",
//   "original_title": "となりのトトロ",
//   "original_title_romanised": "Tonari no Totoro",
//   "description": "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
//   "director": "Hayao Miyazaki",
//   "producer": "Hayao Miyazaki",
//   "release_date": "1988",
//   "running_time": "86",
//   "rt_score": "93",
//   ...
// }
