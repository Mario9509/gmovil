<template>
    <div class="review-container">
      <img 
        :src="review.image" 
        alt="Imagen de {{ review.name }}" 
        class="review-image"
      />
      <h4 class="mt-2">{{ review.name }}</h4>
      <p class="review-comment">"{{ review.comment }}"</p>
      <v-rating
        :value="review.rating"
        readonly
        color="yellow"
        background-color="#D3D3D3"
        class="mt-2"
        dense
        size="30"
      />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      review: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .review-container {
    max-width: 300px;
    padding: 16px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  
  .review-image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 12px;
  }
  
  .review-comment {
    font-style: italic;
    color: #555;
    margin-top: 8px;
  }
  
  .v-rating {
    display: flex;
    justify-content: center;
    margin-top: 8px;
  }
  </style>
  