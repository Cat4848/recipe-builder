CREATE DATABASE IF NOT EXISTS recipe_builder;
USE recipe_builder;

CREATE TABLE IF NOT EXISTS nodes (
  node_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  position_x INT UNSIGNED NOT NULL,
  position_y INT UNSIGNED NOT NULL,
  type VARCHAR(255) NOT NULL,
  content VARCHAR(255) NOT NULL,
  PRIMARY KEY (node_id)
);

CREATE TABLE IF NOT EXISTS edges (
  edge_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  source INT UNSIGNED NOT NULL,
  target INT UNSIGNED NOT NULL,
  PRIMARY KEY (edge_id),
  FOREIGN KEY (source) REFERENCES nodes(node_id),
  FOREIGN KEY (target) REFERENCES nodes(node_id)
);

INSERT INTO nodes (
   position_x, position_y, type, content	
) VALUES (
   0, 0, "input", "bread"
);

INSERT INTO nodes (
   position_x, position_y, type, content	
) VALUES (
   100, 0, "input", "butter"
);

INSERT INTO nodes (
   position_x, position_y, type, content	
) VALUES (
   50, 100, "input", "egg"
);

INSERT INTO edges (
   source, target	
) VALUES (1, 2);

INSERT INTO edges (
   source, target	
) VALUES (2, 3);
