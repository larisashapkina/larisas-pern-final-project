\c cta_dev;

INSERT INTO stilettos (name, image, description, price, rating, featured) VALUES
('Christian Louboutin', 'https://img.mytheresa.com/2176/2176/90/jpeg/catalog/product/46/P00240490.jpg', 'So Kate 120 Patent Leather Pumps', 775, 4, true),
('Mach & Mach', 'https://img.shopstyle-cdn.com/sim/7a/47/7a47584debdea2f01c2c2bde156d9ec0_best/110mm-double-bow-silk-satin-pumps.jpg', '100MM Double Bow Silk Satin Pumps', 1225, 5, true),
('Badgley Mischka Collection','https://img.shopstyle-cdn.com/sim/f4/e5/f4e56fb304175d8f39f802432a7d72ec_best/badgley-mischka-womens-cher-crystal-buckle-pumps.jpg', 'Cher Crystal Embellished Pump', 225, 4, true),
('Saint Laurent','https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/212418F125002_1/saint-laurent-black-and-gold-patent-opyum-85-sandals.jpg', 'Black & Gold Patent Opyum Heels', 995, 5, true);

INSERT INTO reviews (stiletto_id, reviewer, title, content, rating ) VALUES
('1', 'Elena', 'My Favorite', 'My favorite shoes ever', 3),
('2', 'Elena', 'My Favorite', 'The most beautiful stilettos a girl can dream of', 3),
('3', 'Ann', 'My Least Favorite', 'Not comfortable at all', 5),
('2', 'Juliana', 'I Love it', 'I was dreaming about these pair of shoes and finally I got them as a gift', 5),
('4', 'David', 'Cool Stilettos', 'Bought them for my girlfriend, but they are not comfortable', 1),
('4', 'Mr. Mingo', 'So-so', 'They are just fine', 3),
('2', 'Alison', 'A lifesaver!','For any party beautiful pair of shoes', 4),
('3', 'Hannah', 'In love', 'I survived 6 hours wearing these shoes!', 4),
('3', 'Gabi', 'Comfortable', 'So gorgeous and so comfortable', 5);