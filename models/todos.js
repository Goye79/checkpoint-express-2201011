"use strict";

/*
 * El objetivo es hacer un TO DO LIST:
 *   vas a tener que agregarle tareas a distintas personas y
 *   configurar propiedades de esas tareas.
 *
 *    (\
 *    \'\
 *     \'\     __________
 *     / '|   ()_________)
 *     \ '/    \ ~~~~~~~~ \
 *      \       \ ~~~~~~   \
 *      ==).      \__________\
 *     (__)       ()__________)
 */

var tasks = {}; // acá vamos a guardar nuestras personas y tareas

module.exports = {
  reset: function () {
    tasks = {}; // esta función ya esta armada :D
  
  },
  // ==== COMPLETEN LAS SIGUIENTES FUNCIONES (vean los test de `model.js`) =====
  listPeople: function () {
    // devuelve un arreglo de personas con tareas
    return Object.keys(tasks)
  },

  add: function (name, task) {
    // guarda una tarea para una persona en particular
    if (task) {
      tasks[name] = task
    } 
  },
  // etc.
  list: function (name, task) {
    let listaTareas = [];
    const tareasTotales = listaTareas.push(task)
    return tareasTotales
  },

  complete: function (name, task){
    if (task) {
    return false
  }}
  
};
