<?php
class ModelExtensionModuleNewsletters extends Model {
	public function createNewsletter()
	{
			
		$res0 = $this->db->query("SHOW TABLES LIKE '".DB_PREFIX."newsletter'");
		if($res0->num_rows == 0){
			$this->db->query("
				CREATE TABLE IF NOT EXISTS `". DB_PREFIX. "newsletter` (
				  `news_id` int(11) NOT NULL AUTO_INCREMENT,
				  `news_email` varchar(255) NOT NULL,
				  PRIMARY KEY (`news_id`)
				) ENGINE=MyISAM  DEFAULT CHARSET=utf8;
			");
		}
		
		
	}
	public function subscribes($data) {
		$res = $this->db->query("select * from ". DB_PREFIX ."newsletter where news_email='".$data['email']."'");
		if($res->num_rows == 1)
		{
			return "Email Already Exist";
		}
		else
		{
		
			if($this->db->query("INSERT INTO " . DB_PREFIX . "newsletter(news_email) values ('".$data['email']."')"))
			{
				
				$this->load->language('extension/module/newsletter');
				
				$mail = new Mail();
				$mail->protocol = $this->config->get('config_mail_protocol');
				$mail->parameter = $this->config->get('config_mail_parameter');
				$mail->smtp_hostname = $this->config->get('config_mail_smtp_hostname');
				$mail->smtp_username = $this->config->get('config_mail_smtp_username');
				$mail->smtp_password = html_entity_decode($this->config->get('config_mail_smtp_password'), ENT_QUOTES, 'UTF-8');
				$mail->smtp_port = $this->config->get('config_mail_smtp_port');
				$mail->smtp_timeout = $this->config->get('config_mail_smtp_timeout');
		
				$mail->setTo($data['email']);
				$mail->setFrom($this->config->get('config_email'));
				$mail->setSender(html_entity_decode($this->config->get('config_name'), ENT_QUOTES, 'UTF-8'));
				$mail->setSubject(sprintf($this->language->get('email_subject')));
				$mail->setText(sprintf($this->language->get('email_content')));
				$mail->send();
				
				return "Subscription Successfull";
			}
			else
			{
				
				return "Subscription Fail";
			}
		}
	}
		
}