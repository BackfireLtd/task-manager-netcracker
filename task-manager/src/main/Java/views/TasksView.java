package views;
import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class TasksView extends JFrame {

    private JPanel mainPanel;
    private JTable tasksTable;
    private JButton completeButton;
    private JButton deleteButton;
    private JButton addButton;
    private JButton editButton;

    public TasksView() {
        add(mainPanel);
        setTitle("Task Manager");
        setSize( 800, 500);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setResizable(false); // нельзя менять размеры окна

        addButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent actionEvent) {

            }
        });

        setLocationRelativeTo(null);
    }
}