console.log('Loaded!');

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;


import javax.swing.*;

public class Frame {

	public static void main(String[] args) {
		        JFrame frame= new JFrame();
		        frame.setTitle("Timetable Generator");
				frame.setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);
				//frame.pack();
				frame.setSize(1000,1000);
				frame.setVisible(true);
				JPanel panel = new JPanel();
				  frame.add(panel);
				  JLabel label=new JLabel();
				 label.setIcon(new ImageIcon("C:/Users/user12/Downloads/my pictures/sample pictures/vit logo.PNG"));
				frame.add(label);
					
				  JButton button1 = new JButton("Faculty");
				  panel.add(button1);
				  button1.addActionListener (new Action7());
                  JButton button2 = new JButton("Admin");
				  panel.add(button2);
				  button2.addActionListener (new Action1()); 
				  
				  JButton button3=new JButton("Dean");
				  panel.add(button3);
				  button3.addActionListener (new Action2()); 
				  
				  }
	static class Action7 implements ActionListener { 
		  public void actionPerformed (ActionEvent e) { 
			JFrame frame7 = new JFrame("Clicked");
		    frame7.setVisible(true);
		    frame7.setSize(1000,1000);
		    JPanel panel = new JPanel();
		    frame7.add(panel);
		    //panel.setLayout(new BoxLayout(panel,BoxLayout.Y_AXIS));
		    JLabel label8=new JLabel("username");
		    
		    JLabel label9=new JLabel("password");
		    JTextField text8=new JTextField(15);
		    JTextField text9=new JTextField(15);
		    JButton button13=new JButton("submit");
		     panel.add(label8);
		     panel.add(text8);
		     panel.add(label9);
		     panel.add(text9);
		     panel.add(button13);
		     button13.addActionListener(new Action8());
		    
		  }
	}
	static class Action8 implements ActionListener { 
		  public void actionPerformed (ActionEvent e) { 
			JFrame frame8= new JFrame("Clicked");
		    frame8.setVisible(true);
		    frame8.setSize(1000,1000);
		    JPanel panel = new JPanel();
		    frame8.add(panel);
		    JButton button14=new JButton("View Profile");
		    JButton button15=new JButton("View Time Table");
		    panel.add(button14);
		    panel.add(button15);
		  }
	}
	
	static class Action1 implements ActionListener { 
  public void actionPerformed (ActionEvent e) { 
	JFrame frame2 = new JFrame("Clicked");
    frame2.setVisible(true);
    frame2.setSize(1000,1000);
    JPanel panel = new JPanel();
    frame2.add(panel);
    JLabel label1=new JLabel("username");
    JLabel label2=new JLabel("password");
    JTextField text1=new JTextField(15);
    JTextField text2=new JTextField(15);
    JButton button4=new JButton("submit");
     panel.add(label1);
     panel.add(text1);
     panel.add(label2);
     panel.add(text2);
     panel.add(button4);
     button4.addActionListener(new Action3());
}
}
	static class Action3 implements ActionListener {
		public void actionPerformed (ActionEvent e) {
			JFrame frame4 = new JFrame("Clicked");
		    frame4.setVisible(true);
		    frame4.setSize(1000,1000);
		    JPanel panel = new JPanel();
		    frame4.add(panel);
		    JButton button6=new JButton("Add course");
		    button6.addActionListener(new Action10());
		    JButton button7=new JButton("Add Teacher");
		    button7.addActionListener(new Action5());
		    JButton button8=new JButton("Add class room");
		    button8.addActionListener(new Action6());
		    JButton button9=new JButton("Create Timetable");
		    button9.addActionListener(new Action9());
		    panel.add(button6);
		    panel.add(button7);
		    panel.add(button8);
		    panel.add(button9);
		    panel.add (button6);
			
		}
	}
	static class Action10 implements ActionListener { 
		 
		public void actionPerformed (ActionEvent e) { 
		JFrame frame10 = new JFrame("Clicked");
	    frame10.setVisible(true);
	    frame10.setSize(1000,1000);
	    JPanel panel = new JPanel();
	    frame10.add(panel);
	    JLabel label23=new JLabel("Course Name");
	    JTextField text9=new JTextField(15);
	    JLabel label24=new JLabel("No of Subjects");
	    String[] choices6 = {"five"};
	    final JComboBox<String> cb6 = new JComboBox<String>(choices6);
	    JButton button17=new JButton("Submit");
	    button17.addActionListener(new Action11());
	    panel.add(label23);
	    panel.add(text9);
	    panel.add(label24);
	    panel.add(cb6);
	    panel.add(button17);
		}
	}
	static class Action11 implements ActionListener { 
		 
		public void actionPerformed (ActionEvent e) { 
		JFrame frame9 = new JFrame("Clicked");
	    frame9.setVisible(true);
	    frame9.setSize(1000,1000);
	    JPanel panel = new JPanel();
	    frame9.add(panel);
	    JLabel label25=new JLabel("Subject1 Name");
	    JTextField text10=new JTextField(15);
	    JLabel label26=new JLabel("Subject1 Teacher");
	    String[] choices7 = {"teach1","teach2","teach3"};
	    final JComboBox<String> cb7 = new JComboBox<String>(choices7);
	    
	    JLabel label27=new JLabel("Subject2 Name");
	    JTextField text11=new JTextField(15);
	    JLabel label28=new JLabel("Subject2 Teacher");
	    String[] choices8 = {"teach4","teach5","teach6"};
	    final JComboBox<String> cb8 = new JComboBox<String>(choices8);
	    panel.add(label25);
	    panel.add(text10);
	    panel.add(label26);
	    panel.add(cb7);
	    panel.add(label27);
	    panel.add(text11);
	    panel.add(label28);
	    panel.add(cb8);
	    
		}    
	}
	static class Action9 implements ActionListener { 
		 
		public void actionPerformed (ActionEvent e) { 
		JFrame frame9 = new JFrame("Clicked");
	    frame9.setVisible(true);
	    frame9.setSize(1000,1000);
	    JPanel panel = new JPanel();
	    frame9.add(panel);
	    
	    JLabel label19=new JLabel("Room No for Course1\n");
	    String[] choices1 = {"one","two","three","Four"};
	    final JComboBox<String> cb1 = new JComboBox<String>(choices1);
	   
	    JLabel label20=new JLabel("\nRoom Nofor Course2\n");
	    String[] choices2 = {"one","two","three","Four\n"};
	    final JComboBox<String> cb2 = new JComboBox<String>(choices2);
	    JLabel label21=new JLabel("Room No for Course3\n");
	    String[] choices3 = {"one","two","three","Four\n"};
	    final JComboBox<String> cb3= new JComboBox<String>(choices3);
	    JLabel label22=new JLabel("Room No for Course4\n");
	    String[] choices4 = {"one","two","three","Four\n"};
	    final JComboBox<String> cb4 = new JComboBox<String>(choices4);
	    JLabel label23=new JLabel("No of lectures\n");
	    String[] choices5 = {"Four","five","six\n"};
	    final JComboBox<String> cb5 = new JComboBox<String>(choices5);
	    JButton button16 = new JButton("create");
	    panel.add(label19);
	    panel.add(cb1);
	    panel.add(label20);
	    panel.add(cb2);
	    panel.add(label21);
	    panel.add(cb3);
	    panel.add(label22);
	    panel.add(cb4);
	    panel.add(label23);
	    panel.add(cb5);
	    panel.add(button16);

	    
	}
	}
	
	static class Action5 implements ActionListener { 
		 
		public void actionPerformed (ActionEvent e) { 
		JFrame frame6 = new JFrame("Clicked");
	    frame6.setVisible(true);
	    frame6.setSize(1000,1000);
	    JPanel panel = new JPanel();
	    frame6.add(panel);
	    JLabel label3=new JLabel("Teacher Id:");
	    JTextField text3=new JTextField(10);
	    JLabel label4=new JLabel("Name:");
	    JTextField text4=new JTextField(10);
	    JLabel label5=new JLabel("Address:");
	    JTextField text5=new JTextField(50);
	    JLabel label6=new JLabel("Mobile Number:");
	    JTextField text6=new JTextField(10);
	    JLabel label7=new JLabel("Email-Id:");
	    JTextField text7=new JTextField(25);
	    JButton button11=new JButton("submit");
	    panel.add(label3);
	    panel.add(text3);
	    panel.add(label4);
	    panel.add(text4);
	    panel.add(label5);
	    panel.add(text5);
	    panel.add(label6);
	    panel.add(text6);
	    panel.add(label7);
	    panel.add(text7);
	    panel.add(button11);
	    
		}
	}
	static class Action6 implements ActionListener { 
		 
		public void actionPerformed (ActionEvent e) { 
		JFrame frame7 = new JFrame("Clicked");
	    frame7.setVisible(true);
	    frame7.setSize(1000,1000);
	    JPanel panel = new JPanel();
	    frame7.add(panel);
	    JLabel label8=new JLabel("Class Room:");
	    JTextField text8=new JTextField(10);
	    JButton button12=new JButton("submit");
	    panel.add(label8);
	    panel.add(text8);
	    panel.add(button12);
	    
		}
	}
	
	static class Action2 implements ActionListener { 
		 
		public void actionPerformed (ActionEvent e) { 
		JFrame frame3 = new JFrame("Clicked");
	    frame3.setVisible(true);
	    frame3.setSize(1000,1000);
	    JPanel panel = new JPanel();
	    frame3.add(panel);
	    JLabel label3=new JLabel("username");
	    JLabel label4=new JLabel("password");
	    JTextField text3=new JTextField(15);
	    JTextField text4=new JTextField(15);
	    JButton button5=new JButton("submit");
	     panel.add(label3);
	     panel.add(text3);
	     panel.add(label4);
	     panel.add(text4);
	     panel.add(button5);
	     button5.addActionListener(new Action4());
		}
	}
	static class Action4 implements ActionListener { 
		 
		public void actionPerformed (ActionEvent e) { 
		JFrame frame5 = new JFrame("Clicked");
	    frame5.setVisible(true);
	    frame5.setSize(1000,1000);
	    JPanel panel = new JPanel();
	    frame5.add(panel);
	    JButton button10=new JButton("View TimeTable");
	    panel.add(button10);
		}
	}
}
	
		 
				  
				
				
				
		
	


