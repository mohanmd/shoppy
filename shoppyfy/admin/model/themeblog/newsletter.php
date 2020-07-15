<?php
class ModelThemeblogNewsletter extends Model {
	
	public function createNewsletter()
	{
			
		$res0 = $this->db->query("SHOW TABLES LIKE '". DB_PREFIX ."newsletter'");
		if($res0->num_rows == 0){
			$this->db->query("
				CREATE TABLE IF NOT EXISTS `".DB_PREFIX."newsletter` (
				  `news_id` int(11) NOT NULL AUTO_INCREMENT,
				  `news_email` varchar(255) NOT NULL,
				  PRIMARY KEY (`news_id`)
				) ENGINE=MyISAM  DEFAULT CHARSET=utf8;
			");
		}
		
		
	}
			
	public function getNewsLetter() {
		$query = $this->db->query("SELECT * FROM ". DB_PREFIX ."newsletter"); 

		return $query->rows;
	}
	
	public function dropNewsletter() {
		$drop_newsletter = "DROP TABLE IF EXISTS `" . DB_PREFIX . "newsletter`;";
		$this->db->query($drop_newsletter);	
	}
}