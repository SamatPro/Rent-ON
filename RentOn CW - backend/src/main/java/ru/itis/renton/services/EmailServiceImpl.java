package ru.itis.renton.services;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.stereotype.Service;
import ru.itis.renton.models.User;
import ru.itis.renton.repositories.UsersRepository;

@Service
@PropertySource("classpath:confidential.properties")
public class EmailServiceImpl implements EmailService {

    private final String HEADER = "<h3>Уважаемый, firstName!</h3><br>" +
            " <p>Вы зарегистрировались на сайте RentON </p>" +
            "<p>Чтобы подтвердить регистрацию, пожалуйста </p>";
    private final String FOOTER = "<p>Если вы этого не делали, проигнорируйте данное письмо</p>";

    @Autowired
    private JavaMailSender javaMailSender;

    @Autowired
    private UsersRepository usersRepository;

    @Value("${spring.mail.username}")
    private String mailFrom;

    @Override
    public void sendMail(String subject, String text, String email) {

        MimeMessagePreparator messagePreparator = mimeMessage -> {
            MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage);
            messageHelper.setFrom(mailFrom);
            messageHelper.setTo(email);
            messageHelper.setSubject(subject);
            messageHelper.setText(text, true);
        };

        javaMailSender.send(messagePreparator);
    }

    @RabbitListener(queues = "registration")
    @Override
    public void registration(Long id) {
        User user = usersRepository.findUserById(id).get();
        String appeal = HEADER.replaceFirst("firstName", user.getFirstName());
        String text = appeal + "<a href='http://localhost:3000/confirm/" +
                user.getConfirmString() + "'>" +"пройдите по ссылке" + "</a>" +
                FOOTER;

        sendMail("Подтвреждение регистрации", text, user.getLogin());

    }
}
