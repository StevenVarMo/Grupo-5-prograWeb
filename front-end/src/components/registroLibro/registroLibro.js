import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./registroLibro.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegistroLibro = () => {
  const [nombreLibro, setNombreLibro] = useState("");
  const [nombreAutor, setNombreAutor] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3008/registroLibro", {
        nombre_autor: nombreAutor,
        nombre_libro: nombreLibro,

      });
      console.log(response.data);
      // Reset input fields after successful registration
      alert("Libro Creado con Exito");
      localStorage.setItem("libro", JSON.stringify(response.data.libro));
      //navigate("/");
      setNombreAutor("");
      setNombreLibro("");
    } catch (error) {
      console.error("Error registering Libro:", error);
    }
  };
  return (
    <div className={styles.RegistroLibro} data-testid="RegistroLibro">
      <Card sx={{ maxWidth: 375, margin: "auto" }}>
        <CardContent>
          <h1>Registro de Libros</h1>
          <TextField
            id="outlined-basic"
            onChange={(e) => {
              setNombreLibro(e.target.value);
            }}
            label="Nombre del Libro"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            id="outlined-basic"
            onChange={(e) => {
              setNombreAutor(e.target.value);
            }}
            label="Autor"
            variant="outlined"
          />
          <br />
          <br />
          <Button onClick={handleSubmit} variant="contained">
            Registro de Libro
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
RegistroLibro.propTypes = {};
RegistroLibro.defaultProps = {};
export default RegistroLibro;