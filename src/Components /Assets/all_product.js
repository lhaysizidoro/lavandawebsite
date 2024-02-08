import p1_img from './product_01.jpg';
import p2_img from './product_02.jpg';
import p3_img from './product_03.jpg';
import p4_img from './product_04.jpg';
import p5_img from './product_05.jpg';
import p6_img from './product_06.jpg';
import p7_img from './product_07.jpg';
import p8_img from './product_08.jpg';
import p9_img from './product_09.jpg';
import p10_img from './product_10.jpg';
import p11_img from './product_11.jpg';
import p12_img from './product_12.jpg';
import p13_img from './product_13.jpg';
import p14_img from './product_14.jpg';
import p15_img from './product_15.jpg';
import p16_img from './product_16.jpg';
import p17_img from './product_17.jpg';
import p18_img from './product_18.jpg';
import p19_img from './product_19.jpg';
import p20_img from './product_20.jpg';
import p21_img from './product_21.jpg';
import p22_img from './product_22.jpg';
import p23_img from './product_23.jpg';
import p24_img from './product_24.jpg';
import p25_img from './product_25.jpg';
import p26_img from './product_26.jpg';
import p27_img from './product_27.jpg';
import p28_img from './product_28.jpg';
import p29_img from './product_29.jpg';
import p30_img from './product_30.jpg';
import p31_img from './product_31.jpg';

let all_product = [
    { 
        id: 1,
        name: "Sérum Facial de Vitamina C 10% 30ml",
        category: "faciais",
        image: p1_img,
        price: 139.90,
        
    },

    { 
        id: 2,
        name: "Loção Hidratante Botânica",
        category: "corporais",
        image: p2_img,
        price: 89.00,
    },
    { 
        id: 3,
        name: " Spray Revitalizante 150ml",
        category: "corporais",
        image: p3_img,
        price: 69.00,
    },
    { 
        id: 4,
        name: "Sérum Antioxidante de Chá Verde",
        category: "faciais",
        image: p4_img,
        price: 99.00,
    },
    { 
        id: 5,
        name: "Kit Radiante com Óleos Essenciais ",
        category: "kits",
        image: p5_img,
        price: 145.90,
    },

    { 
        id: 6,
        name: "Sabonete de Aloe Vera Refrescante",
        category: "sabonetes",
        image: p6_img,
        price: 22.90,
    },
    { 
        id: 7,
        name: "Sabonete argila detox",
        category: "sabonetes",
        image: p7_img,
        price: 145.00,
    },
    { 
        id: 8,
        name: "Sérum Calmante de Camomila",
        category: "faciais",
        image: p8_img,
        price: 75.99,
    },
    { 
        id: 9,
        name: "Hidratante Antioxidante de Romã:",
        category: "corporais",
        image: p9_img,
        price: 85.00,
    },
    { 
        id: 10,
        name: "Hidratante Calmante de Camomila",
        category: "corporais",
        image: p10_img,
        price: 79.90,
    },
    { 
        id: 11,
        name: "Sérum Facial de Vitamina C 10% 30ml",
        category: "sabonetes",
        image: p11_img,
        price: 145.00,
    },
    { 
        id: 12,
        name: "Sabonete Purificante Vegano",
        category: "sabonetes",
        image: p12_img,
        price: 145.00,
    },
    { 
        id: 13,
        name: "Sabonete Esfoliante de Frutas Tropicais",
        category: "sabonetes",
        image: p13_img,
        price: 29.90,
    },
    { 
        id: 14,
        name: "Sabonete Esfoliante de Jasmim",
        category: "sabonetes",
        image: p14_img,
        price: 36.90,
    },
    { 
        id: 15,
        name: "Sabonete multifuncional",
        category: "sabonetes",
        image: p15_img,
        price: 49.99,
    },
    { 
        id: 16,
        name: "Kit Essencial de Skincare Vegano",
        category: "kits",
        image: p16_img,
        price: 105.00,
    },
    { 
        id: 17,
        name: "Loção Reparadora de Rosa Mosqueta",
        category: "corporais",
        image: p17_img,
        price: 89.00,
    },
    { 
        id: 18,
        name: "Kit Vegan Glow",
        category: "kits",
        image: p18_img,
        price: 145.00,
    },
    { 
        id: 19,
        name: "Sérum Noturno Reparador Intenso",
        category: "faciais",
        image: p19_img,
        price: 99.00,
    },
    { 
        id: 20,
        name: "Kit de Cuidados Naturais para a Pele",
        category: "kits",
        image: p20_img,
        price: 179.00,
    },
    { 
        id: 21,
        name: "Kit Detox para a Pele",
        category: "kits",
        image: p21_img,
        price: 179.00,
    },
    { 
        id: 22,
        name: "Spray Calmante Lavanda",
        category: "faciais",
        image: p28_img,
        price: 79.00,
    },
    { 
        id: 23,
        name: "Sérum Calmante de Aloe Vera",
        category: "faciais",
        image: p23_img,
        price: 79.00,
    },
    { 
        id: 24,
        name: "Loção Purificante",
        category: "corporais",
        image: p24_img,
        price: 79.00,
    },
    { 
        id: 25,
        name: "Spray Corporal Revigorante",
        category: "corporais",
        image: p25_img,
        price: 79.00,
    },
    { 
        id: 26,
        name: "Sabonete de Lavanda Relaxante",
        category: "sabonetes",
        image: p26_img,
        price: 19.00,
    },
    
    { 
        id: 27,
        name: "Spray Calmante Lavanda",
        category: "kits",
        image: p27_img,
        price: 79.00,
    },
    
    { 
        id: 28,
        name: "Óleo Cuidados Naturais para a Pele",
        category: "corporais",
        image: p30_img,
        price: 89.00,
    },
    

    
    { 
        id: 29,
        name: "Sérum Antienvelhecimento Vegano",
        category: "faciais",
        image: p29_img,
        price: 69.00,
    },
    { 
        id: 31,
        name: "Hidratante Noturno",
        category: "faciais",
        image: p31_img,
        price: 179.00,
    },
 



]

export default all_product