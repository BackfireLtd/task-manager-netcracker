package util;

import models.Task;

import views.Notification;
import javax.annotation.Nonnull;
import javax.swing.*;
import javax.websocket.Session;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Date;
import java.util.Timer;
import java.util.TimerTask;


public class NotificationsScheduler {
    private static ArrayList<Timer> timers = new ArrayList<>();
    public static void resetTimers() {
        for(Timer timer : timers)
            timer.cancel();
        timers.clear();
    }

    public static void scheduleNotifications(JFrame frame, Task task) {

        if(LocalDateTime.now().compareTo(task.getDueDate().minusMinutes(1)) < 0) {
            Timer timer = new Timer();
            timers.add(timer);
            timer.schedule(new TimerTask() {
                @Override
                public void run() {
                    new Notification(frame, task, true);
                    timers.remove(timer);
                }
            }, Date.from(task.getDueDate().minusMinutes(1)
                    .atZone(ZoneId.systemDefault())
                    .toInstant()));
        }

        if(LocalDateTime.now().compareTo(task.getDueDate()) < 0) {
            Timer timer = new Timer();
            timers.add(timer);
            timer.schedule(new TimerTask() {
                @Override
                public void run() {
                    new Notification(frame, task, false);
                    timers.remove(timer);
                }
            }, Date.from(task.getDueDate()
                    .atZone(ZoneId.systemDefault())
                    .toInstant()));
        }
    }

    public static <session> void scheduleNotifications(Task task,Session session){
//        if(LocalDateTime.now().compareTo(task.getDueDate()) < 0) {
            Timer timer = new Timer();
            timers.add(timer);
            timer.schedule(new TimerTask() {
                @Override
                public void run() {
//                    new Notification( task, false);
                    try {
                        session.getBasicRemote().sendText(String.format("The execution time for the \"%s\" task has come to an end.", task.getName()));
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                    timers.remove(timer);
                }
            }, Date.from(task.getDueDate()
                    .atZone(ZoneId.systemDefault())
                    .toInstant()));
//        }
    }
}
