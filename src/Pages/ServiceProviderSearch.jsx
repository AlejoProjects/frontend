import React, { useState, useEffect } from "react";
import InformacionUsuario from "./UserInformation";

const ServiceProviderSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Obtención de datos de la API de base de datos NoSQL cuando se monta el componente
    fetch("http://localhost:3000/api/v1/HabilidadesPersonas/")
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data); // Ls resupesta de la API es un array de los proveedores de servicios
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const handleSearch = () => {
    // Filter service providers based on the search query
    const results = searchResults.filter((provider) => {
      const providerInfo = `${provider.name} ${provider.apellido} ${provider.ubicación} ${provider.precio} ${provider.perfil} ${provider.calificación}`;
      return providerInfo.toLowerCase().includes(searchQuery.toLowerCase());
    });

    setSearchResults(results);
  };

  return (
    <div>
      <h1>Service Provider Search</h1>
      <input
        type="text"
        placeholder="Search for a service provider"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {searchResults.map((provider, index) => (
            <InformacionUsuario key={index} info={Object.values(provider)} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceProviderSearch;

