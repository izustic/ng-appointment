import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { CommonModule, DatePipe } from '@angular/common';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css',
})
export class AppointmentListComponent implements OnInit{
  newAppointmentTitle: string = '';
  newAppointmentDate: Date = new Date();
  newAppointmentTag: string = "";

  appointments: Appointment[] = [];

    ngOnInit():void {
      let savedAppointments = localStorage.getItem('appointments');
      this.appointments = savedAppointments ? JSON.parse(savedAppointments) : [];
    }
  addAppointment() {
    if (this.newAppointmentTitle.trim().length && this.newAppointmentDate && this.newAppointmentTag) {
      let newAppointment: Appointment = {
        id: this.appointments.length+1,
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate,
        tags: this.newAppointmentTag.trim().split(',').map(tag => tag.trim())
      };

      this.appointments.push(newAppointment);
      this.newAppointmentTitle = '';
      this.newAppointmentDate = new Date();
      this.newAppointmentTag = '';

      localStorage.setItem("appointments", JSON.stringify(this.appointments))

    }
  }
  deleteAppointment(id: number) {
    this.appointments = this.appointments.filter(appointment => appointment.id !== id)
    localStorage.setItem("appointments", JSON.stringify(this.appointments))

  }
}
